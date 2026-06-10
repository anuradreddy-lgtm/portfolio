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
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200/10 dark:border-white/5 pb-8 mb-16 relative">
          <div className="text-left">
            <span className="coordinate-mono text-xs text-cyber-indigo dark:text-cyber-teal mb-3 block">
              // CREDENTIALS_REF // 06
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Licenses & <span className="font-editorial italic font-normal text-cyber-indigo dark:text-cyber-teal">Certifications</span>
            </h2>
          </div>
          <div className="coordinate-mono text-xs text-slate-400 dark:text-slate-500 mt-4 md:mt-0 select-none">
            [CREDENTIALS // PROOFS]
          </div>
          {/* Blueprint Crosshairs */}
          <div className="absolute -bottom-1 -left-1 text-[10px] text-cyber-teal/30 select-none">+</div>
          <div className="absolute -bottom-1 -right-1 text-[10px] text-cyber-teal/30 select-none">+</div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              className="glass-panel asymmetric-rounded overflow-hidden flex flex-col h-full group relative border border-slate-200/10 dark:border-white/5 text-left"
            >
              {/* Badge visual banner - simplified, human-crafted design */}
              <div className="h-16 border-b border-slate-200/10 dark:border-white/5 flex items-center justify-between px-6 relative overflow-hidden bg-[#020304]/40">
                <div className="coordinate-mono text-[9px] select-none uppercase tracking-widest">// CERT_0{cert.id}</div>
                <div className="text-cyber-indigo dark:text-cyber-teal">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Body description info */}
              <div className="p-6 flex flex-col flex-1 justify-between text-left">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 transition-all group-hover:text-cyber-indigo group-hover:underline dark:group-hover:text-cyber-teal decoration-cyber-indigo dark:decoration-cyber-teal decoration-1.5 underline-offset-4 tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] text-slate-500 dark:text-slate-400 mb-6 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyber-teal" />
                      {cert.date}
                    </span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/10 dark:border-white/5 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-bold text-cyber-indigo dark:text-cyber-teal hover:underline cursor-pointer"
                  >
                    View Details
                  </button>
                  <a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 text-xs transition-colors"
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
