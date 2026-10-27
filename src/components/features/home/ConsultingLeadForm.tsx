"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Shield, Sparkles, Loader2 } from "lucide-react";

export function ConsultingLeadForm() {
  const t = useTranslations('HomePage.LeadForm');
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Giả lập gửi thông tin form
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="py-24 bg-[#00262B] text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FED55E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight mb-4 leading-tight">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Form Container (White card on deep dark background) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white text-[#00262B] rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#E1DDD2]"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#00262B] mb-2">
                        {t('firstName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#00262B] mb-2">
                        {t('lastName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Văn A"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#00262B] mb-2">
                        {t('workEmail')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#00262B] mb-2">
                        {t('mobile')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Company & City Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#00262B] mb-2">
                        {t('company')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tên công ty / Tập đoàn"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#00262B] mb-2">
                        {t('city')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all bg-white"
                      >
                        <option value="">{t('cityPlaceholder')}</option>
                        <option value="HN">Hà Nội</option>
                        <option value="HCM">TP. Hồ Chí Minh</option>
                        <option value="DN">Đà Nẵng</option>
                        <option value="HP">Hải Phòng</option>
                        <option value="CT">Cần Thơ</option>
                        <option value="OTHER">Tỉnh/Thành phố khác</option>
                      </select>
                    </div>
                  </div>

                  {/* Interest Field */}
                  <div>
                    <label className="block text-sm font-bold text-[#00262B] mb-2">
                      {t('interest')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all bg-white"
                    >
                      <option value="">{t('interestPlaceholder')}</option>
                      <option value="manager">{t('interestOption1')}</option>
                      <option value="leader">{t('interestOption2')}</option>
                      <option value="consulting">{t('interestOption3')}</option>
                      <option value="inhouse">{t('interestOption4')}</option>
                    </select>
                  </div>

                  {/* Goals Textarea */}
                  <div>
                    <label className="block text-sm font-bold text-[#00262B] mb-2">
                      {t('goals')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t('goalsPlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00262B] focus:ring-2 focus:ring-[#00262B]/20 outline-none text-sm font-medium transition-all"
                    />
                  </div>

                  {/* Checkbox Opt-in */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="optIn"
                      defaultChecked
                      className="mt-1 w-4 h-4 text-[#00262B] rounded border-gray-300 focus:ring-[#00262B]"
                    />
                    <label htmlFor="optIn" className="text-xs sm:text-sm text-gray-600 leading-relaxed cursor-pointer">
                      {t('optIn')}
                    </label>
                  </div>

                  {/* Privacy Note */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                    <Shield className="w-4 h-4 text-[#00262B] shrink-0" />
                    <span>{t('privacy')}</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t('submit')}
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black italic text-[#00262B] mb-3">
                    {t('successTitle')}
                  </h3>
                  <p className="text-base text-gray-600 max-w-md mx-auto mb-8">
                    {t('successDesc')}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all"
                  >
                    Gửi biểu mẫu khác
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
