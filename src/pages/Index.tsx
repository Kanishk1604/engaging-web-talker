
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600">We're here to help! Send us a message and we'll respond as soon as possible.</p>
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default Index;
