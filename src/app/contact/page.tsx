"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/data";
import { apiRequest } from "@/lib/queryClient";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({}); //Added for error handling

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: undefined });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subject: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, consent: checked });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({}); //Clear any existing errors
    const validationErrors: Record<string, string> = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.subject) validationErrors.subject = "Subject is required";
    if (!formData.message) validationErrors.message = "Message is required";
    if (!formData.consent) validationErrors.consent = "Consent is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="section-heading text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Connect With Us
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s connect on your path to wellness. Whether you seek
            personal healing, spiritual guidance, or wish to share your journey,
            we&apos;re here to listen and support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <div className="bg-white/90 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center border border-purple-100">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`px-4 py-3 border rounded-lg form-input ${
                      errors
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-300 focus:border-purple-500"
                    }`}
                    aria-invalid={errors ? "true" : "false"}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`px-4 py-3 border rounded-lg form-input ${
                      errors
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-300 focus:border-purple-500"
                    }`}
                    aria-invalid={errors ? "true" : "false"}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger
                    className={`px-4 py-3 border rounded-lg form-input ${
                      errors
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-300 focus:border-purple-500"
                    }`}
                    aria-invalid={errors ? "true" : "false"}
                  >
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healing_request">
                      Healing Session Request
                    </SelectItem>
                    <SelectItem value="reiki_subscription">
                      Reiki Subscription
                    </SelectItem>
                    <SelectItem value="question">General Question</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Please share your thoughts or questions..."
                  className={`px-4 py-3 border rounded-lg form-input ${
                    errors
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-300 focus:border-purple-500"
                  }`}
                  aria-invalid={errors ? "true" : "false"}
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={handleCheckboxChange}
                  className={`mt-1 ${
                    errors
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-300 focus:border-purple-500"
                  }`}
                  aria-invalid={errors ? "true" : "false"}
                />
                <Label
                  htmlFor="consent"
                  className="text-muted-foreground text-sm"
                >
                  I consent to having this website store my submitted
                  information so they can respond to my inquiry and provide
                  requested healing services.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center border border-indigo-100">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email Us</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Text Us</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    We will get back to you soon
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-primary"
                  />
                </div>
                <div>
                  <p className="text-foreground font-medium">Visit Us</p>
                  <div className="text-muted-foreground">
                    {contactInfo.address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-8">
              <h4 className="font-heading font-medium text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary   hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-primary"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary    hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-primary"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary   hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary   hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Decorative SVG or icon in the center */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <span className="bg-gradient-to-tr from-purple-400 to-indigo-400 p-4 rounded-full shadow-xl text-white text-3xl border-4 border-white/60">
          ✨
        </span>
      </div>
    </section>
  );
};

export default Contact;
