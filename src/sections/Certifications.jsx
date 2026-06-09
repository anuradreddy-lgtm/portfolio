import React, { useState } from 'react';
import { Award, Calendar, CheckCircle, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const certsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Dec 2025',
    credentialId: 'AWS-ASA-998877',
    gradient: 'from-amber-500 to-orange-600',
    verification: 'https://aws.amazon.com/verification',
    details: 'Validated expertise in designing distributed systems on AWS, incorporating load balancers, auto-scaling, cloud security, and serverless architectures.'
  },
  {
    id: 2,
    title: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud Platform (GCP)',
    date: 'Oct 2025',
    credentialId: 'GCP-ACE-554433',
    gradient: 'from-blue-500 to-cyan-600',
    verification: 'https://cloud.google.com/verification',
    details: 'Demonstrated proficiency in configuring and managing GCP cloud operations, deploying GKE Kubernetes clusters, setting up IAM, and configuring VPC networks.'
  },
  {
    id: 3,
    title: 'Meta Full Stack Developer Certificate',
    issuer: 'Coursera / Meta',
    date: 'Jun 2024',
    credentialId: 'META-FSD-221100',
    gradient: 'from-indigo-600 to-blue-500',
    verification: 'https://coursera.org/verification',
    details: 'Comprehensive training covering React development, REST architectures, Node backend setups, SQL database modeling, and deployment strategies.'
  }
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 border-t border-white/5 relative select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-indigo dark:text-cyber-teal mb-3 block">
            Credentials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyber-indigo to-cyber-teal rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group relative"
            >
              {/* Badge visual banner */}
              <div className={`h-24 bg-gradient-to-tr ${cert.gradient} flex items-center justify-between px-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/10">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/50">
                  Credential
                </span>
              </div>

              {/* Body description info */}
              <div className="p-6 flex flex-col flex-1 justify-between text-left">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyber-teal transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 mb-6 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyber-teal" />
                      {cert.date}
                    </span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-bold text-cyber-indigo dark:text-cyber-teal hover:underline "
                  >
                    View Details
                  </button>
                  <a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white flex items-center gap-1 text-xs "
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Modal for Certificate details */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-md w-full bg-slate-900 rounded-3xl glass-panel p-8 border border-white/10 text-left z-10"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white "
                >
                  <X className="w-4 h-4" />
                </button>

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedCert.gradient} flex items-center justify-center text-white mb-6`}>
                  <Award className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl font-black text-slate-900 dark:text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-sm font-semibold text-cyber-teal mb-4">
                  Issued by {selectedCert.issuer} &bull; {selectedCert.date}
                </p>

                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {selectedCert.details}
                </p>

                <div className="flex items-center justify-between text-xs border-t border-white/5 pt-4 text-slate-500 font-mono">
                  <span>ID: {selectedCert.credentialId}</span>
                  <a
                    href={selectedCert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyber-indigo dark:text-cyber-teal font-bold hover:underline "
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
