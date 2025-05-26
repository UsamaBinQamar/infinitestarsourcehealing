"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// List of available request types
const requestTypes = [
  { value: "person", label: "Person" },
  { value: "list", label: "List of People" },
  { value: "animals", label: "Animals" },
  { value: "plants", label: "Plants" },
  { value: "place", label: "Place" },
  { value: "situation", label: "Situation" },
  { value: "event", label: "Event" },
  { value: "other", label: "Other" },
];

// Types for history items
interface RequestHistoryItem {
  id: string;
  requestType: string;
  requestName: string;
  details: string;
  date: string;
}

export default function RequestHealing() {
  const { toast } = useToast();
  const [requestType, setRequestType] = useState("person");
  const [requestName, setRequestName] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Initialize with empty history
  const [historyItems, setHistoryItems] = useState<RequestHistoryItem[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requestName.trim()) {
      toast({
        title: "Please enter a name",
        description:
          "Enter the name or description of what you're requesting healing for.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    setShowSuccessModal(false);

    try {
      const res = await fetch("/api/request-healing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType,
          requestName,
          details,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      // Add to history
      const newHistoryItem: RequestHistoryItem = {
        id: Date.now().toString(),
        requestType,
        requestName,
        details,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      };
      setHistoryItems([newHistoryItem, ...historyItems]);
      setShowSuccessModal(true);

      // Clear form
      setRequestName("");
      setDetails("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error submitting request:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit request.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
        Request Healing & Prayer
      </h1>

      <div className="max-w-3xl mx-auto mb-12">
        <Card className="border-purple-200 bg-white/50 backdrop-blur-sm shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-100 to-blue-50">
            <CardTitle className="text-center text-2xl text-indigo-700">
              Healing Energy Request
            </CardTitle>
            <CardDescription className="text-center px-4 space-y-2">
              <p>
                Our forms are infused with reiki healing energy, and healing
                energy will be immediately sent to the situation, person, or
                thing once submitted for 24 hours after submitting the form.
              </p>
              {/* <div className="flex items-center justify-center gap-2 text-purple-600">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Energy Transmission Active
                </span>
                <Sparkles className="h-4 w-4" />
              </div> */}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium text-indigo-800">
                  What type of healing do you need?
                </Label>
                <RadioGroup
                  defaultValue="person"
                  value={requestType}
                  onValueChange={setRequestType}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                >
                  {requestTypes.map((type) => (
                    <div
                      key={type.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={type.value}
                        id={`request-${type.value}`}
                      />
                      <Label
                        htmlFor={`request-${type.value}`}
                        className="cursor-pointer"
                      >
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Name/Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="requestName"
                  className="text-base font-medium text-indigo-800"
                >
                  {requestType === "person"
                    ? "Person's Name"
                    : requestType === "list"
                      ? "Names (one per line)"
                      : requestType === "animals"
                        ? "Animal(s) Description"
                        : requestType === "plants"
                          ? "Plant(s) Description"
                          : requestType === "place"
                            ? "Location Name"
                            : requestType === "situation"
                              ? "Situation Description"
                              : requestType === "event"
                                ? "Event Description"
                                : "Description"}
                </Label>
                {requestType === "list" ? (
                  <Textarea
                    id="requestName"
                    placeholder={`Enter names, one per line\nExample:\nJohn Smith\nMary Johnson\nSmith Family`}
                    className="min-h-[120px] border-indigo-200"
                    value={requestName}
                    onChange={(e) => setRequestName(e.target.value)}
                  />
                ) : (
                  <input
                    id="requestName"
                    type="text"
                    className="w-full rounded-md border border-indigo-200 px-3 py-2"
                    placeholder={
                      requestType === "person"
                        ? "e.g. John Smith"
                        : requestType === "animals"
                          ? "e.g. My cat Fluffy"
                          : requestType === "plants"
                            ? "e.g. Garden plants"
                            : requestType === "place"
                              ? "e.g. New York City"
                              : requestType === "situation"
                                ? "e.g. Family conflict"
                                : requestType === "event"
                                  ? "e.g. Upcoming surgery"
                                  : ""
                    }
                    value={requestName}
                    onChange={(e) => setRequestName(e.target.value)}
                  />
                )}
              </div>

              {/* Details */}
              <div className="space-y-2">
                <Label
                  htmlFor="details"
                  className="text-base font-medium text-indigo-800"
                >
                  Request Details (what healing is needed)
                </Label>
                <Textarea
                  id="details"
                  placeholder="Describe your request for healing in more detail..."
                  className="min-h-[120px] border-indigo-200"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-2"
                disabled={submitting || !requestName.trim()}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting Request...
                  </span>
                ) : (
                  "Submit Healing Request"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* History Section */}
        {/* <div className="mt-12">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center">
            <span className="mr-2">📜</span> Your Request History
          </h2>

          {historyItems.length > 0 ? (
            <div className="space-y-3">
              {historyItems.map((item) => (
                <Card key={item.id} className="bg-white/80 border-indigo-100">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-indigo-800">
                          {item.requestName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          <span className="capitalize">{item.requestType}</span>{" "}
                          • {item.date}
                        </p>
                        {item.details && (
                          <p className="text-sm text-gray-700 mt-1 italic">
                            {item.details}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setRequestType(item.requestType);
                          setRequestName(item.requestName);
                          setDetails(item.details);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50"
                      >
                        Request Again
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">
              No request history yet. Your healing requests will appear here.
            </p>
          )}
        </div> */}
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-700/80 via-pink-400/60 to-indigo-600/80 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center relative border-4 border-purple-200 animate-pop-in">
            <div className="flex justify-center mb-4">
              <span className="relative inline-block">
                <span className="absolute -inset-2 blur-xl opacity-60 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 rounded-full animate-pulse"></span>
                <span className="relative text-6xl select-none">✨</span>
              </span>
            </div>
            <h2 className="text-3xl font-extrabold mb-2 text-indigo-700 drop-shadow-lg">
              Thank You!
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Your healing request has been{" "}
              <span className="font-semibold text-purple-600">received</span>.
              <br />
              <span className="text-indigo-600 font-medium">
                Our practitioners will begin sending energy right away.
              </span>
              <br />
              <span className="block mt-2 text-xl font-bold text-pink-500 animate-glow">
                You are surrounded by light! 🌟
              </span>
            </p>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-pink-600 text-white px-8 py-2 rounded-lg shadow-lg text-lg font-semibold mt-2 transition-all duration-200"
              autoFocus
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
