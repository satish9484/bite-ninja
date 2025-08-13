import { useMemo, useState } from "react";
import styles from "./styles/ContactSection.module.scss";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isValidEmail = (value: string) =>
    /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/.test(
      value.trim()
    );

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name";
    if (!values.email.trim()) next.email = "Please enter your email";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid email";
    if (!values.message.trim()) next.message = "Please enter your message";
    return next;
  };

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const onChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      const next = { ...form, [field]: value } as FormState;
      setForm(next);
      // Live-validate only the edited field
      const fieldErrors = validate(next);
      setErrors((prev) => {
        const updated: FormErrors = { ...prev };
        if (field in fieldErrors) updated[field] = fieldErrors[field];
        else delete updated[field];
        return updated;
      });
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const issues = validate(form);
    setErrors(issues);
    if (Object.keys(issues).length === 0) {
      setIsSubmitting(true);
      // Simulate async submission
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 2500);
      }, 1000);
    }
  };

  return (
    <section className={styles.contactRoot} aria-labelledby="contact-title">
      <div
        className={`container d-flex flex-column md:flex-row items-center ${styles.contactContainer}`}
      >
        <div className={`${styles.contactLeft} d-flex flex-column`}>
          <h2 id="contact-title" className={styles.contactTitle}>
            Get in touch
          </h2>
          <p className={styles.contactSubtitle}>
            We’d love to hear from you. Send us a message and our team will get
            back within 1–2 business days.
          </p>
          <figure className={styles.contactMapCard}>
            <img
              src="/Images/section_7_map.png"
              alt="Map showing our service area"
            />
          </figure>
        </div>

        <div className={`${styles.contactRight} w-100`}>
          <form
            className={styles.contactFormCard}
            noValidate
            onSubmit={onSubmit}
          >
            <div
              className={`d-grid grid-cols-1 gap-6 ${styles.contactGridRow}`}
            >
              <div className={styles.contactHalf}>
                <label htmlFor="name" className={styles.contactLabel}>
                  Name <span className={styles.contactRequired}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={onChange("name")}
                  aria-invalid={Boolean(errors.name) || undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={styles.contactInput}
                  required
                />
                {errors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className={styles.contactErrorText}
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div className={styles.contactHalf}>
                <label htmlFor="email" className={styles.contactLabel}>
                  Email <span className={styles.contactRequired}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={onChange("email")}
                  aria-invalid={Boolean(errors.email) || undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={styles.contactInput}
                  required
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className={styles.contactErrorText}
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.contactBlock}>
              <label htmlFor="message" className={styles.contactLabel}>
                Message <span className={styles.contactRequired}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                autoComplete="off"
                placeholder="How can we help?"
                value={form.message}
                onChange={onChange("message")}
                aria-invalid={Boolean(errors.message) || undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${styles.contactInput} ${styles.contactTextarea}`}
                required
              />
              {errors.message && (
                <p
                  id="message-error"
                  role="alert"
                  className={styles.contactErrorText}
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div
              className={`${styles.contactActions} d-flex items-center gap-4 md:flex-row flex-column`}
            >
              <button
                type="submit"
                className={`${styles.contactSubmitButton} btn btn-primary`}
                aria-disabled={hasErrors || isSubmitting}
                disabled={hasErrors || isSubmitting}
                aria-busy={isSubmitting || undefined}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
              {submitted && (
                <span
                  className={styles.contactSuccessText}
                  role="status"
                  aria-live="polite"
                >
                  Thanks! Your message has been sent.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
