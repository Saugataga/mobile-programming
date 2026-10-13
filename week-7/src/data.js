// Brand colors from the Paila visual style guideline
export const colors = {
  primary: "#2D175D",
  accent: "#EF5A46",
  secondary: "#FFD45C",
  support: "#8BE3C6",
  text: "#171027",
  cream: "#FFF8E8",
  white: "#FFFFFF",
  gray: "#777777",
};

// Sample projects (in a real app these would come from a server)
export const projects = [
  {
    id: 1,
    title: "UI/UX Design for Local Bakery",
    business: "Sweet Crumbs Bakery",
    category: "Design",
    place: "Local",
    budget: "15,000",
    icon: "🍞",
    about:
      "We are a small local bakery in Lalitpur looking for a creative UI/UX designer to redesign our brand and create a simple, modern interface for our online ordering system.",
    requirements: [
      "Basic UI/UX design knowledge",
      "Figma (or similar tool)",
      "Portfolio (if available)",
    ],
  },
  {
    id: 2,
    title: "Mobile App Feature Testing",
    business: "Yatra Tech",
    category: "Development",
    place: "Remote",
    budget: "8,000",
    icon: "📱",
    about:
      "Test the new booking feature of our travel app on Android and iOS and write a short report of the bugs you find.",
    requirements: ["Android or iOS phone", "Attention to detail", "Good written English"],
  },
  {
    id: 3,
    title: "Social Media Content Creation",
    business: "Himalayan Brew Co.",
    category: "Marketing",
    place: "Local",
    budget: "6,000",
    icon: "📣",
    about:
      "Create 10 Instagram posts and captions to launch our new coffee shop in Kathmandu.",
    requirements: ["Canva or Photoshop", "Creative writing", "Instagram knowledge"],
  },
  {
    id: 4,
    title: "Website Redesign (WordPress)",
    business: "Everest Treks",
    category: "Development",
    place: "Remote",
    budget: "25,000",
    icon: "💻",
    about:
      "Redesign our trekking company website in WordPress so that it looks modern and works well on mobile.",
    requirements: ["WordPress experience", "Basic HTML and CSS", "Responsive design"],
  },
  {
    id: 5,
    title: "Blog Articles about Nepal Travel",
    business: "Visit Pokhara",
    category: "Writing",
    place: "Remote",
    budget: "5,000",
    icon: "✍️",
    about: "Write 5 short blog articles (500 words each) about places to visit in Pokhara.",
    requirements: ["Good English writing", "Basic SEO knowledge", "Meet deadlines"],
  },
];

export const messages = [
  { id: 1, name: "Sweet Crumbs Bakery", text: "Can you share your portfolio?", time: "8:21 AM" },
  { id: 2, name: "Yatra Tech", text: "Thanks for the bug report!", time: "8:05 AM" },
  { id: 3, name: "Himalayan Brew Co.", text: "The posts look great 👍", time: "Yesterday" },
  { id: 4, name: "Everest Treks", text: "When can you start the project?", time: "Yesterday" },
  { id: 5, name: "Visit Pokhara", text: "Payment has been sent.", time: "Mon" },
  { id: 6, name: "Paila Team", text: "Welcome to Paila! 🎉", time: "Sun" },
];
