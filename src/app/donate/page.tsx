"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Donation() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(0);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const donationAmounts = [5, 10, 25, 50, 100];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(value);
    setSelectedAmount("custom");
  };

  const getDonationAmount = () => {
    if (selectedAmount === "custom") {
      return parseFloat(customAmount) || 0;
    }
    return selectedAmount;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const amount = getDonationAmount();

    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!name || !email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          name,
          email,
          message,
        }),
      });

      const { success, url, error } = await response.json();

      if (success && url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        throw new Error(error || "Failed to create checkout session");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Donation Failed",
        description:
          "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-2 text-purple-700">
        Support Our Healing Work
      </h1>
      <p className="text-center mb-10 max-w-2xl mx-auto">
        Your generous donations help us continue providing free Reiki and
        healing energy to those in need around the world.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="border-purple-200 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center text-purple-700">
                Make a Donation
              </CardTitle>
              <CardDescription className="text-center">
                Your support enables us to continue our healing mission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donation Amount Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium">
                    Select Donation Amount
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={
                          selectedAmount === amount ? "default" : "outline"
                        }
                        className={
                          selectedAmount === amount
                            ? "bg-purple-600 hover:bg-purple-700"
                            : "border-purple-200"
                        }
                        onClick={() => handleAmountClick(amount)}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label
                      htmlFor="customAmount"
                      className="block text-sm font-medium mb-1"
                    >
                      Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        id="customAmount"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 pl-6"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 min-h-[100px]"
                      placeholder="Share why you're donating or any healing intentions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSubmitting || getDonationAmount() <= 0}
                >
                  {isSubmitting ? (
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
                      Processing...
                    </span>
                  ) : (
                    `Donate ${getDonationAmount() > 0 ? `$${getDonationAmount().toFixed(2)}` : ""}`
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Your donation supports our work but is not tax-deductible.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-purple-200 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-purple-700">
                How Your Donation Helps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>
                    Maintain our platform that delivers healing energy worldwide
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>
                    Support our team of dedicated healing practitioners
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>Expand our daily Reiki subscription program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>
                    Provide healing to those who cannot afford services
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-purple-700">
                Other Ways to Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Volunteer</h3>
                <p className="text-sm text-gray-600">
                  If you&apos;re a certified healer, consider donating your time
                  by joining our practitioner network.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Spread the Word</h3>
                <p className="text-sm text-gray-600">
                  Share our platform with those who might benefit from free
                  healing services.
                </p>
              </div>

              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-2"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Contact Us to Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
