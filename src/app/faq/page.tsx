import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Reiki energy healing?",
      answer: `Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by "laying on hands" or through distance healing and is based on the idea that an unseen "life force energy" flows through us. If one's life force energy is low, then we are more likely to get sick or feel stress, and if it is high, we are more capable of being happy and healthy.`,
    },
    {
      question: "How does distance healing work?",
      answer: `Distance healing works on the principle that energy is not bound by physical distance. Through specific Reiki techniques, practitioners can direct healing energy to anyone, anywhere in the world. This works through the quantum field, where everything is connected beyond the limitations of time and space.`,
    },
    {
      question: "Are the energy activations really free?",
      answer: `Yes, all our energy activations and healing services are completely free. We believe that healing energy should be accessible to everyone. We accept donations from those who are able to contribute, which helps us maintain and expand our services, but there is never any obligation to donate.`,
    },
    {
      question: "How will I feel after receiving a Reiki blessing?",
      answer: `Experiences vary widely. Some people report feeling warmth, tingling, or a sense of peace and relaxation. Others might notice subtle shifts in their energy, mood, or physical sensations. Some people don't feel immediate effects but notice positive changes in the hours or days following the energy transmission.`,
    },
    {
      question: "How does the Daily Reiki Subscription work?",
      answer: `When you subscribe to our Daily Reiki service, your name is added to our list of recipients. Each day, our practitioners perform a ceremony where Reiki energy is channeled to all subscribers simultaneously. You'll also receive daily messages with guidance and affirmations, either via email or SMS, depending on your subscription preference.`,
    },
    {
      question: "Can I receive healing for someone else?",
      answer: `Yes, you can request healing for someone else through our Request Healing & Prayer page. The best approach is to get their permission first, but in cases where that's not possible (such as in emergency situations), you can still send healing with the intention that it works for their highest good and with respect for their free will.`,
    },
    {
      question:
        "How is Infinite Star Source Healing different from other healing platforms?",
      answer: `Our platform uniquely combines spiritual technologies with digital delivery systems. We've developed methods to transmit healing energies through electronic devices and digital media. Additionally, we offer a comprehensive approach that includes not just healing but also spiritual growth resources, community connection, and daily energy support.`,
    },
    {
      question: "I'm a musician/artist. How can I collaborate with you?",
      answer: `We welcome collaborations with musicians and artists who create spiritually-oriented work. Through our For Musicians/Artists/Creators page, you can submit your information for potential collaboration. We offer energy infusion for creative works, which can enhance their healing properties and reach.`,
    },
    {
      question: "How long do the healing effects last?",
      answer: `Our daily activations last for 24 hours, but their effects can continue to unfold over time. The energy works on multiple levels—physical, emotional, mental, and spiritual—and builds in effectiveness with regular use. Many people find that consistent engagement with our healing services creates cumulative benefits.`,
    },
    {
      question: "Can Reiki replace medical treatment?",
      answer: `No, Reiki is complementary to medical treatment, not a replacement for it. We always recommend following the advice of qualified healthcare professionals for medical conditions. Reiki can work alongside conventional medical care to support overall well-being and enhance the body's natural healing abilities.`,
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-2 text-purple-700">
        Frequently Asked Questions
      </h1>
      <p className="text-center mb-10 max-w-2xl mx-auto">
        Find answers to common questions about our energy healing services,
        subscriptions, and how our platform works.
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-purple-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6">
            If you couldn&apos;t find the answer to your question, please feel
            free to contact us directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
