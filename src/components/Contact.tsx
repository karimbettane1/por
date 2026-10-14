import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Clock, 
  MessageSquare, 
  Info 
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { profileData } from '../data/profile';

interface ContactProps {
  onOpenCv: () => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCv }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfigHint, setShowConfigHint] = useState(false);

  const validate = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Au moins 2 caractères requis';
    }

    if (!formData.email.trim()) {
      errors.email = "L'adresse email est requise";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Format email invalide (ex: nom@domaine.com)';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      errors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Au moins 10 caractères requis';
    }

    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!isValid) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowConfigHint(true);
      // Construct a mailto fallback so user can actually send it directly via their mail client
      const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});

      // Open email client safely
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 800);
    }, 900);
  };

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-xl bg-[#0e1935] border px-4 py-3 text-sm text-white placeholder-[#6f8db3] outline-none transition-all duration-200 ${
      hasError
        ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400/20'
        : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20'
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#93c5fd] text-[12.5px] font-semibold mb-3">
            <Send className="w-3.5 h-3.5 text-blue-400" />
            <span>Contact & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white font-poppins tracking-tight">
            Me{' '}
            <span
              style={{
                background: 'linear-gradient(92deg, #60a5fa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Contacter
            </span>
          </h2>
          <p className="text-[#9bb7de] text-[15.5px] mt-3">
            Un projet en tête, une opportunité de stage ou une question technique ? Construisons quelque chose de grand ensemble.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Coordinates & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Coordinates Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl">
              <h3 className="font-poppins font-black text-xl text-white mb-2">
                Discutons de vos besoins
              </h3>
              <p className="text-xs text-[#8caecc] mb-6 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Réponse garantie sous 12 à 24h ouvrées</span>
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-semibold text-[#8caecc]">Email Professionnel</div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-white text-sm font-semibold hover:text-blue-400 transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#8caecc]">Téléphone / WhatsApp</div>
                    <a
                      href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                      className="text-white text-sm font-semibold hover:text-emerald-400 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#8caecc]">Localisation</div>
                    <div className="text-white text-sm font-semibold">
                      {profileData.city}, {profileData.country} (Formation Sefrou)
                    </div>
                  </div>
                </div>
              </div>

              {/* View CV button */}
              <button
                onClick={onOpenCv}
                className="w-full mt-6 py-3 px-4 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] transition-transform"
                style={{
                  background: 'linear-gradient(100deg, #2563eb, #7c3aed)',
                }}
              >
                <FileText className="w-4 h-4" />
                <span>Télécharger / Consulter mon CV</span>
              </button>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#7ea1ce] mb-3">
                  Réseaux & Plateformes
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-blue-400 hover:bg-white/[0.08] flex items-center justify-center text-[#dbe8f8] hover:text-white transition-all hover:-translate-y-1"
                    title="Profil GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-blue-400 hover:bg-white/[0.08] flex items-center justify-center text-[#60a5fa] hover:text-white transition-all hover:-translate-y-1"
                    title="Profil LinkedIn"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>

                  <a
                    href={`https://wa.me/${profileData.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-emerald-400 hover:bg-white/[0.08] flex items-center justify-center text-[#4ade80] hover:text-white transition-all hover:-translate-y-1"
                    title="WhatsApp direct"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-blue-400 hover:bg-white/[0.08] flex items-center justify-center text-[#93c5fd] hover:text-white transition-all hover:-translate-y-1"
                    title="Email direct"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl">
              <h3 className="font-poppins font-black text-xl text-white mb-2">
                Envoyer un Message
              </h3>
              <p className="text-xs text-[#8caecc] mb-6">
                Remplissez les informations ci-dessous pour me joindre directement.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#8caecc] mb-1.5">
                      Votre Nom *
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Youssef El Amrani"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={inputClasses(Boolean(touched.name && errors.name))}
                    />
                    {touched.name && errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#8caecc] mb-1.5">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      placeholder="ex: contact@entreprise.ma"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={inputClasses(Boolean(touched.email && errors.email))}
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-[#8caecc] mb-1.5">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    placeholder="ex: Proposition d'entretien / Opportunité de projet Full Stack"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    className={inputClasses(Boolean(touched.subject && errors.subject))}
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#8caecc] mb-1.5">
                    Votre Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre besoin, les technologies souhaitées ou les détails de votre offre..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`${inputClasses(Boolean(touched.message && errors.message))} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-70"
                  style={{
                    background: 'linear-gradient(100deg, #2563eb, #7c3aed)',
                    boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)',
                  }}
                >
                  {isSubmitting ? (
                    <span>Préparation du message...</span>
                  ) : (
                    <>
                      <span>Envoyer le Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Feedback Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-emerald-200">
                        Votre message est prêt et votre messagerie s'ouvre pour l'acheminer à Karim Bettane.
                      </p>
                      <p className="mt-1 text-emerald-400/80">
                        Vous pouvez également lui écrire directement à : <a href={`mailto:${profileData.email}`} className="underline font-bold">{profileData.email}</a>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Backend configuration guide (as requested in prompt) */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <button
                  onClick={() => setShowConfigHint(!showConfigHint)}
                  className="text-xs text-[#7ea3ce] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-blue-400" />
                  <span>Comment connecter un service d'envoi automatique (EmailJS / Formspree / API) ?</span>
                </button>

                {showConfigHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 p-4 rounded-xl bg-blue-950/40 border border-blue-500/25 text-xs text-[#bfdbfe] space-y-2 leading-relaxed"
                  >
                    <p className="font-semibold text-white">
                      Guide pour activer l'envoi d'emails sans backend personnalisé :
                    </p>
                    <ol className="list-decimal pl-4 space-y-1 text-[#93c5fd]">
                      <li>
                        <strong>Option 1 (EmailJS) :</strong> Inscrivez-vous sur <code>emailjs.com</code>, créez un template et installez <code>@emailjs/browser</code>.
                      </li>
                      <li>
                        <strong>Option 2 (Formspree) :</strong> Créez un endpoint sur <code>formspree.io</code> et pointez le <code>POST</code> de ce formulaire dessus.
                      </li>
                      <li>
                        <strong>Option 3 (Backend Laravel) :</strong> Créez une route API <code>POST /api/contact</code> connectée au système <code>Mail::to()</code> de Laravel.
                      </li>
                    </ol>
                  </motion.div>
                )}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
