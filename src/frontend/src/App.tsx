import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  ChevronDown,
  Clock,
  Compass,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Star,
  Tag,
  Tent,
  Thermometer,
  Users,
  Wind,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const destinations = [
  {
    id: "om-parvat",
    name: "Om Parvat",
    elevation: "6,191 m",
    difficulty: "Challenging",
    duration: "12 days",
    image: "/assets/uploads/image-019d3d43-e3e6-7585-8047-a769ababe669-1.png",
    badge: "Sacred Peak",
    badgeColor: "bg-amber-100 text-amber-800",
    description:
      "Witness the divine — a natural OM symbol etched in snow on the face of this sacred Himalayan peak. A pilgrimage trekkers and devotees have undertaken for centuries, offering breathtaking views and profound spiritual energy.",
    highlights: [
      "Natural Om snow symbol",
      "Pithoragarh district",
      "Hindu pilgrimage site",
    ],
  },
  {
    id: "parvati-kund",
    name: "Parvati Kund Lake",
    elevation: "4,800 m",
    difficulty: "Moderate",
    duration: "8 days",
    image: "/assets/generated/parvati-kund.dim_600x400.jpg",
    badge: "Sacred Lake",
    badgeColor: "bg-blue-100 text-blue-800",
    description:
      "A pristine glacial lake nestled high in the Kumaon Himalayas, believed to be the bathing place of Goddess Parvati. The turquoise waters mirror surrounding snow peaks in a scene of ethereal beauty.",
    highlights: [
      "Crystal glacial waters",
      "Goddess Parvati legend",
      "Rare alpine flora",
    ],
  },
  {
    id: "adi-kailash",
    name: "Adi Kailash",
    elevation: "6,310 m",
    difficulty: "Challenging",
    duration: "10 days",
    image: "/assets/uploads/image-019d207f-78c5-710d-99f9-56c835233f2d-2.png",
    badge: "Original Kailash",
    badgeColor: "bg-green-100 text-green-800",
    description:
      "Often called the 'Original Kailash', this ancient sacred mountain predates the Tibetan pilgrimage routes. Surrounded by sweeping meadows and cascading glaciers, it offers a deeply moving spiritual and physical challenge.",
    highlights: [
      "Pre-Tibetan pilgrimage",
      "Stunning meadows",
      "Glacial valleys",
    ],
  },
  {
    id: "panchuli",
    name: "Panchuli Peaks",
    elevation: "6,904 m",
    difficulty: "Challenging",
    duration: "5 Days / 4 Nights",
    image: "/assets/image-019d6359-6a29-71c6-af3f-98279fa5ef22.png",
    badge: "Five Peaks",
    badgeColor: "bg-purple-100 text-purple-800",
    description:
      "The Panchuli massif — five summits believed to be the cooking fires (chulhas) of the Pandavas on their final journey to heaven. Standing majestically in Darma valley, these peaks offer one of the most awe-inspiring panoramas in the entire Kumaon Himalayas.",
    highlights: ["Five sacred summits", "Darma Valley", "Pandava legend"],
  },
];

const packages = [
  {
    name: "Panchuli Trek",
    tier: "Explorer",
    price: "₹15,599",
    duration: "5 Days / 4 Nights",
    groupSize: "8 – 10 people",
    color: "border-purple-400",
    headerBg: "bg-purple-600",
    featured: true,
    features: [
      "Shared tent accommodation",
      "All meals (breakfast & dinner)",
      "Experienced local guide",
      "Basic first aid kit",
      "Porters for group gear",
      "Forest permits & entry fees",
      "Darma Valley scenic route",
    ],
    destinations: ["Panchuli Peaks"],
  },
  {
    name: "Sathi Essential",
    tier: "Budget",
    price: "₹18,499",
    duration: "5 Nights / 4 Days",
    groupSize: "8 - 10 people",
    color: "border-muted",
    headerBg: "bg-muted",
    features: [
      "Shared tent accommodation",
      "All meals (breakfast & dinner)",
      "Experienced local guide",
      "Basic first aid kit",
      "Porters for group gear",
      "Forest permits & entry fees",
    ],
    destinations: ["Om Parvat"],
  },
  {
    name: "Sathi Explorer",
    tier: "Standard",
    price: "₹22,999",
    duration: "6 Days / 5 Nights",
    groupSize: "Up to 8",
    color: "border-primary",
    headerBg: "bg-primary",
    features: [
      "Semi-private tent accommodation",
      "All meals (3 times daily)",
      "Senior certified guide",
      "Medical oxygen cylinder",
      "Personal porter included",
      "All permits & fees",
      "Pre-trek briefing session",
      "Satellite phone access",
    ],
    destinations: ["Om Parvat", "Adi Kailash"],
  },
  {
    name: "Sathi Summit",
    tier: "Premium",
    price: "₹25,999",
    duration: "6 Days / 5 Nights",
    groupSize: "Up to 4",
    color: "border-accent",
    headerBg: "bg-accent",
    features: [
      "Private luxury tent & sleeping bag",
      "Gourmet mountain cuisine",
      "Dedicated expert guide + assistant",
      "Complete medical kit & O₂",
      "2 personal porters",
      "All permits & fees",
      "Acclimatization program",
      "Helicopter evacuation insurance",
      "Pre & post-trek hotel",
      "Professional photography",
    ],
    destinations: ["Om Parvat", "Adi Kailash"],
  },
];

const galleryItems = [
  {
    label: "Dawn at Om Parvat",
    gradient: "from-slate-700 via-blue-900 to-slate-800",
  },
  {
    label: "High Camp Life",
    gradient: "from-green-900 via-emerald-800 to-teal-900",
  },
  { label: "Sacred Kund", gradient: "from-blue-800 via-cyan-700 to-blue-900" },
  {
    label: "Valley Crossing",
    gradient: "from-stone-700 via-amber-900 to-stone-800",
  },
  {
    label: "Stargazing Camp",
    gradient: "from-indigo-950 via-slate-900 to-purple-950",
  },
  { label: "Summit Views", gradient: "from-sky-700 via-blue-600 to-slate-700" },
];

const difficultyColor: Record<string, string> = {
  Moderate: "bg-green-100 text-green-800",
  Challenging: "bg-orange-100 text-orange-800",
  Strenuous: "bg-red-100 text-red-800",
};

const pricePerPerson: Record<string, number> = {
  panchuli: 15599,
  "om-parvat": 18499,
  "parvati-kund": 18499,
  "adi-kailash": 32000,
};

function formatINR(amount: number): string {
  return amount.toLocaleString("en-IN");
}

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    members: "",
    pickupLocation: "haldwani-kathgodam",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const memberCount = Number.parseInt(formData.members, 10);
  const destinationPrice = pricePerPerson[formData.destination];
  const showDiscount =
    !Number.isNaN(memberCount) &&
    memberCount >= 5 &&
    destinationPrice !== undefined;

  const baseTotal = showDiscount ? destinationPrice * memberCount : 0;
  const discountAmount = showDiscount ? Math.round(baseTotal * 0.2) : 0;
  const discountedTotal = showDiscount ? baseTotal - discountAmount : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.destination) {
      toast.error("Please fill in your name, email, and select a destination.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success(
      "Your booking enquiry has been sent! We'll contact you within 24 hours.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      members: "",
      pickupLocation: "haldwani-kathgodam",
      message: "",
    });
  };

  return (
    <div className="min-h-screen font-body bg-background text-foreground">
      <Toaster richColors />

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Mountain className="w-7 h-7 text-primary" />
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Sathi Trekking
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              data-ocid="nav.destinations.link"
              href="#destinations"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Destinations
            </a>
            <a
              data-ocid="nav.packages.link"
              href="#packages"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Packages
            </a>
            <a
              data-ocid="nav.camping.link"
              href="#camping"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Camping
            </a>
            <a
              data-ocid="nav.gallery.link"
              href="#gallery"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <Button
              data-ocid="nav.book_button"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={scrollToContact}
            >
              Book Now
            </Button>
          </nav>
          <Button
            data-ocid="nav.mobile_book_button"
            size="sm"
            className="md:hidden bg-primary text-primary-foreground"
            onClick={scrollToContact}
          >
            Book
          </Button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/uploads/image-019d3263-1e93-766e-ac13-b21826639a36-1.png"
            alt="Himalayan mountains at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-amber-300 mb-4">
              Himalayan Adventures
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Sathi
              <br />
              <span className="text-amber-300">Trekking</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Journey to sacred peaks, glacial lakes, and ancient pilgrimage
              routes in the heart of the Kumaon Himalayas. Where every step
              brings you closer to the divine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                data-ocid="hero.explore_button"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
                onClick={() =>
                  document
                    .getElementById("destinations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Compass className="mr-2 w-5 h-5" /> Explore Destinations
              </Button>
              <Button
                data-ocid="hero.book_button"
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/10 hover:bg-white/20 backdrop-blur text-base px-8 py-6"
                onClick={scrollToContact}
              >
                Book Your Trek
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Treks Completed" },
            { value: "15+", label: "Years Experience" },
            { value: "12", label: "Sacred Routes" },
            { value: "98%", label: "Happy Trekkers" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold">{s.value}</p>
              <p className="text-primary-foreground/75 text-sm mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section id="destinations" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary font-semibold mb-3">
            Explore
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Sacred Destinations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ancient peaks and holy lakes revered for millennia — now accessible
            with your trusted Sathi guide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                data-ocid={`destinations.item.${i + 1}`}
                className="overflow-hidden group hover:shadow-mountain transition-all duration-300 border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${dest.badgeColor}`}
                    >
                      {dest.badge}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColor[dest.difficulty]}`}
                    >
                      {dest.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {dest.name}
                    </h3>
                    <span className="text-white/90 text-sm font-medium">
                      {dest.elevation}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.map((h) => (
                      <Badge key={h} variant="secondary" className="text-xs">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {dest.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Uttarakhand
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-widest uppercase text-primary font-semibold mb-3">
              Plans
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Trekking Packages
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Choose the journey that suits your spirit. All packages include
              experienced local guides and safety equipment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex"
              >
                <Card
                  data-ocid={`packages.item.${i + 1}`}
                  className={`flex flex-col w-full border-2 ${pkg.color} ${
                    pkg.featured ? "relative shadow-mountain" : ""
                  } transition-all`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                        New Package
                      </span>
                    </div>
                  )}
                  <CardHeader
                    className={`${pkg.headerBg} ${
                      pkg.featured ? "text-white" : ""
                    } rounded-t-lg p-6`}
                  >
                    <p className="text-xs uppercase tracking-widest opacity-75 font-semibold">
                      {pkg.tier}
                    </p>
                    <CardTitle className="font-display text-2xl font-bold mt-1">
                      {pkg.name}
                    </CardTitle>
                    <div className="mt-3">
                      <span className="font-display text-4xl font-bold">
                        {pkg.price}
                      </span>
                      <span className="text-sm opacity-75 ml-1">/ person</span>
                    </div>
                    <div className="flex gap-4 mt-3 text-sm opacity-80">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {pkg.groupSize}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Destinations
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.destinations.map((d) => (
                          <Badge key={d} variant="outline" className="text-xs">
                            {d}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      data-ocid={`packages.book_button.${i + 1}`}
                      className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={scrollToContact}
                    >
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPING EXPERIENCE ── */}
      <section id="camping" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm tracking-widest uppercase text-primary font-semibold mb-3">
                Sleep Under the Stars
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                The Camping
                <br />
                <span className="text-primary">Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                There is nothing quite like waking up at 15,000 feet with snow
                peaks glowing pink at dawn. Our high-altitude camps are
                carefully sited at the most stunning locations, combining safety
                and raw mountain beauty.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Tent,
                    title: "Quality Tents",
                    desc: "4-season high-altitude shelters",
                  },
                  {
                    icon: Wind,
                    title: "Weather Ready",
                    desc: "Full storm preparation protocols",
                  },
                  {
                    icon: Thermometer,
                    title: "Warm Meals",
                    desc: "Hot food at every camp",
                  },
                  {
                    icon: Star,
                    title: "Prime Locations",
                    desc: "Handpicked campsites with views",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-mountain aspect-[4/3]">
                <img
                  src="/assets/generated/camping-himalaya.dim_800x500.jpg"
                  alt="Camping in the Himalayas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-mountain">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["S", "R", "A"].map((l) => (
                      <div
                        key={l}
                        className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">500+ happy trekkers</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-widest uppercase text-primary font-semibold mb-3">
              Visual Journey
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Trek Gallery
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every image is a memory from the trail — a testament to the raw
              beauty of the Himalayas.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                data-ocid={`gallery.item.${i + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative rounded-xl overflow-hidden aspect-square bg-gradient-to-br ${item.gradient} group cursor-pointer`}
              >
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <p className="text-white font-semibold text-sm">
                    {item.label}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary font-semibold mb-3">
            Reviews
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            What Trekkers Say
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Arjun Sharma",
              loc: "Delhi",
              trek: "Om Parvat Trek",
              rating: 5,
              text: "The most spiritual experience of my life. Sathi's guides knew every stone on the path and made us feel completely safe even at altitude. The sight of the natural Om symbol was otherworldly.",
            },
            {
              name: "Priya Kapoor",
              loc: "Mumbai",
              trek: "Adi Kailash Yatra",
              rating: 5,
              text: "Sathi Trekking made the impossible feel achievable. The entire team was professional, warm, and deeply knowledgeable about the local culture and sacred significance of each site.",
            },
            {
              name: "Rahul Nair",
              loc: "Bengaluru",
              trek: "Parvati Kund",
              rating: 5,
              text: "Absolutely flawless organization from start to finish. The camping experience under a sky full of stars with snow peaks all around — I'll never forget a single night. Already planning my return.",
            },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {["s1", "s2", "s3", "s4", "s5"]
                      .slice(0, t.rating)
                      .map((k) => (
                        <Star
                          key={k}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {t.loc} · {t.trek}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT / BOOKING ── */}
      <section id="contact" ref={contactRef} className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-widest uppercase text-primary font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Book Your Trek
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Tell us about your dream trek and we'll create a personalized
              itinerary just for you.
            </p>
          </motion.div>
          <Card
            data-ocid="contact.modal"
            className="border-border shadow-mountain"
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      data-ocid="contact.name.input"
                      id="name"
                      placeholder="Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      data-ocid="contact.email.input"
                      id="email"
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      data-ocid="contact.phone.input"
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="members"
                      className="flex items-center gap-2"
                    >
                      <Users className="w-4 h-4 text-primary" />
                      Number of Members
                    </Label>
                    <Select
                      value={formData.members}
                      onValueChange={(v) =>
                        setFormData((p) => ({ ...p, members: v }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="contact.members.select"
                        id="members"
                      >
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person (Solo)</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5">5 People</SelectItem>
                        <SelectItem value="6">6 People</SelectItem>
                        <SelectItem value="7">7 People</SelectItem>
                        <SelectItem value="8">8 People</SelectItem>
                        <SelectItem value="9">9 People</SelectItem>
                        <SelectItem value="10">10 People</SelectItem>
                        <SelectItem value="11">11 People</SelectItem>
                        <SelectItem value="12">12 People</SelectItem>
                        <SelectItem value="13">13 People</SelectItem>
                        <SelectItem value="14">14 People</SelectItem>
                        <SelectItem value="15">15+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* ── DESTINATION SELECT ── */}
                <div className="space-y-2">
                  <Label
                    htmlFor="destination"
                    className="flex items-center gap-2"
                  >
                    <Mountain className="w-4 h-4 text-primary" />
                    Preferred Destination *
                  </Label>
                  <Select
                    value={formData.destination}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, destination: v }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="contact.destination.select"
                      id="destination"
                      className="h-12 text-base"
                    >
                      <SelectValue placeholder="Select a destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="panchuli">🏔 Panchuli Peaks</SelectItem>
                      <SelectItem value="om-parvat">🕉 Om Parvat</SelectItem>
                      <SelectItem value="parvati-kund">
                        💧 Parvati Kund Lake
                      </SelectItem>
                      <SelectItem value="adi-kailash">⛰ Adi Kailash</SelectItem>
                      <SelectItem value="custom">✨ Custom Trek</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* ── GROUP DISCOUNT BOX ── */}
                <AnimatePresence>
                  {showDiscount && (
                    <motion.div
                      data-ocid="contact.success_state"
                      key="discount-box"
                      initial={{ opacity: 0, y: -10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-xl border-2 border-green-400 bg-green-50 dark:bg-green-950/30 dark:border-green-600 p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                          <Tag className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-green-800 dark:text-green-300 text-base">
                              Group Discount Applied! 🎉
                            </span>
                            <Badge className="bg-green-600 hover:bg-green-600 text-white text-xs px-2 py-0.5">
                              20% OFF
                            </Badge>
                          </div>
                          <p className="text-green-700 dark:text-green-400 text-sm">
                            Special rate for groups of 5+ members
                          </p>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-green-950/50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>
                            ₹{formatINR(destinationPrice)} × {memberCount}{" "}
                            people
                          </span>
                          <span className="line-through">
                            ₹{formatINR(baseTotal)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-green-700 dark:text-green-400 font-medium">
                          <span>Group Discount (20%)</span>
                          <span>− ₹{formatINR(discountAmount)}</span>
                        </div>
                        <div className="border-t border-green-200 dark:border-green-700 pt-2 flex justify-between items-center">
                          <span className="font-bold text-green-900 dark:text-green-200 text-base">
                            Final Total
                          </span>
                          <span className="font-bold text-green-700 dark:text-green-300 text-xl">
                            ₹{formatINR(discountedTotal)}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-green-600 dark:text-green-500 mt-3 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Discount will be confirmed in your booking confirmation
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── PICKUP LOCATION ── */}
                <div className="space-y-2">
                  <Label
                    htmlFor="pickup-location"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    Pickup Location
                  </Label>
                  <Select
                    value={formData.pickupLocation}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, pickupLocation: v }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="contact.pickup.select"
                      id="pickup-location"
                    >
                      <SelectValue placeholder="Select pickup point" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haldwani-kathgodam">
                        Haldwani (Kathgodam), Uttarakhand
                      </SelectItem>
                      <SelectItem value="almora">
                        Almora, Uttarakhand
                      </SelectItem>
                      <SelectItem value="pithoragarh">
                        Pithoragarh, Uttarakhand
                      </SelectItem>
                      <SelectItem value="dharchula">
                        Dharchula, Uttarakhand
                      </SelectItem>
                      <SelectItem value="delhi">Delhi (Anand Vihar)</SelectItem>
                      <SelectItem value="dehradun">
                        Dehradun, Uttarakhand
                      </SelectItem>
                      <SelectItem value="other">
                        Other (mention in message)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Default pickup: Haldwani (Kathgodam), Uttarakhand
                  </p>
                  {/* ── ROUTE MAP IMAGE ── */}
                  <div className="mt-3 rounded-xl overflow-hidden border border-border">
                    <img
                      src="/assets/uploads/4f947eff-588c-43a0-81b5-3f8a5ac9e070-019d3256-d768-715a-a43a-466b4bdc370b-1.png"
                      alt="Adi Kailash Route Map from Kathgodam"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Trek</Label>
                  <Textarea
                    data-ocid="contact.message.textarea"
                    id="message"
                    rows={4}
                    placeholder="Preferred dates, group size, fitness level, any special requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                  />
                </div>
                <Button
                  data-ocid="contact.submit_button"
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span> Sending
                      Enquiry...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Compass className="w-5 h-5" /> Send Booking Enquiry
                    </span>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  We respond within 24 hours. No payment required to enquire.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="w-7 h-7 text-accent" />
                <span className="font-display text-xl font-bold">
                  Sathi Trekking
                </span>
              </div>
              <p className="text-background/70 leading-relaxed max-w-sm">
                Your trusted companion for sacred Himalayan treks. Based in
                Pithoragarh, Uttarakhand — guiding adventurers since 2009 to
                India's most spiritual mountain destinations.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  data-ocid="footer.instagram.link"
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  data-ocid="footer.facebook.link"
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  data-ocid="footer.youtube.link"
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4 text-accent">Destinations</p>
              <ul className="space-y-2 text-background/70 text-sm">
                <li>
                  <a
                    data-ocid="footer.panchuli.link"
                    href="#destinations"
                    className="hover:text-background transition-colors"
                  >
                    Panchuli Peaks
                  </a>
                </li>
                <li>
                  <a
                    data-ocid="footer.om_parvat.link"
                    href="#destinations"
                    className="hover:text-background transition-colors"
                  >
                    Om Parvat
                  </a>
                </li>
                <li>
                  <a
                    data-ocid="footer.parvati_kund.link"
                    href="#destinations"
                    className="hover:text-background transition-colors"
                  >
                    Parvati Kund Lake
                  </a>
                </li>
                <li>
                  <a
                    data-ocid="footer.adi_kailash.link"
                    href="#destinations"
                    className="hover:text-background transition-colors"
                  >
                    Adi Kailash
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-accent">Contact Us</p>
              <ul className="space-y-3 text-background/70 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Dharchula, Uttarakhand 262547
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 81719 18018
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@sathitrekking.in
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>
              © {new Date().getFullYear()} Sathi Trekking. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with{" "}
              <Heart className="w-3 h-3 fill-red-400 text-red-400 mx-0.5" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-background/80 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
