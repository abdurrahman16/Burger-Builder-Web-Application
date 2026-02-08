import React, { Component } from "react";
import { Formik } from "formik";

export class Auth extends Component {
  state = { mode: "Sign Up" };

  render() {
    const FP = "#E21B70";

    const s = {
      page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "linear-gradient(135deg,#fff,#fff5fa)",
        fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif",
      },
      card: {
        width: "100%",
        maxWidth: 420,
        background: "#fff",
        borderRadius: 18,
        padding: 22,
        border: "1px solid rgba(0,0,0,.06)",
        boxShadow: "0 14px 34px rgba(0,0,0,.10)",
      },
      top: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
      },
      title: { margin: 0, fontSize: 22, fontWeight: 900, color: "#111827" },
      sub: { margin: "6px 0 18px", color: "#6b7280", fontSize: 13, lineHeight: 1.5 },
      field: { marginBottom: 14 },
      label: { display: "block", marginBottom: 6, fontSize: 13, fontWeight: 800, color: "#374151" },
      input: {
        width: "100%",
        padding: "12px 12px",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        outline: "none",
        fontSize: 14,
      },
      inputErr: { border: "1px solid #ef4444", boxShadow: "0 0 0 3px rgba(239,68,68,.12)" },
      err: { marginTop: 6, color: "#ef4444", fontSize: 12, fontWeight: 700 },
      row: { display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 14px" },
      hint: { color: "#6b7280", fontSize: 12 },
      btn: {
        width: "100%",
        padding: 12,
        borderRadius: 14,
        border: 0,
        cursor: "pointer",
        fontWeight: 900,
        fontSize: 14,
        color: "#fff",
        background: FP,
        boxShadow: "0 12px 22px rgba(226,27,112,.25)",
      },
      btnDis: { opacity: 0.6, cursor: "not-allowed", boxShadow: "none" },
      link: { background: "transparent", border: 0, padding: 0, cursor: "pointer", fontWeight: 900, color: FP },
      switchBtn: {
        background: FP,
        color: "#fff",
        border: 0,
        padding: "8px 12px",
        borderRadius: 999,
        cursor: "pointer",
        fontWeight: 800,
        fontSize: 12,
        boxShadow: "0 10px 18px rgba(226,27,112,.22)",
      },
      footer: { marginTop: 14, textAlign: "center", color: "#6b7280", fontSize: 12 },
    };

    const isSignup = this.state.mode === "Sign Up";

    return (
      <div style={s.page}>
        <div style={s.card}>
          <div style={s.top}>
            <div>
              <h2 style={s.title}>{isSignup ? "Create account" : "Welcome back"}</h2>
              <p style={s.sub}>
                {isSignup
                  ? "Sign up with your email and password to get started."
                  : "Sign in with your email and password to continue."}
              </p>
            </div>

            <button
              onClick={() => this.setState({ mode: isSignup ? "Login" : "Sign Up" })}
              style={s.switchBtn}
            >
              {isSignup ? "Switch to Login" : "Switch to Sign Up"}
            </button>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(v) => {
              const e = {};
              if (!v.email) e.email = "Email is required";
              else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v.email)) e.email = "Invalid email";

              if (!v.password) e.password = "Password is required";
              else if (v.password.length < 6) e.password = "Min 6 characters";

              return e;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(`${isSignup ? "SIGN UP" : "LOGIN"}\n\n` + JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div style={s.field}>
                  <label style={s.label} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    style={{ ...s.input, ...(errors.email && touched.email ? s.inputErr : {}) }}
                    autoComplete="email"
                  />
                  {errors.email && touched.email && <div style={s.err}>{errors.email}</div>}
                </div>

                <div style={s.field}>
                  <label style={s.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    style={{ ...s.input, ...(errors.password && touched.password ? s.inputErr : {}) }}
                    autoComplete={isSignup ? "new-password" : "current-password"}
                  />
                  {errors.password && touched.password && <div style={s.err}>{errors.password}</div>}
                </div>

                <div style={s.row}>
                  <span style={s.hint}>Tip: use a strong password</span>
                  <button type="button" style={s.link} onClick={() => alert("Reset page: under development")}>
                    Forgot?
                  </button>
                </div>

                <button type="submit" disabled={isSubmitting} style={{ ...s.btn, ...(isSubmitting ? s.btnDis : {}) }}>
                  {isSubmitting ? (isSignup ? "Creating..." : "Signing in...") : isSignup ? "Sign Up" : "Sign In"}
                </button>

                <div style={s.footer}>
                  {isSignup ? "Already have an account? " : "Don’t have an account? "}
                  <button
                    type="button"
                    style={s.link}
                    onClick={() => this.setState({ mode: isSignup ? "Login" : "Sign Up" })}
                  >
                    {isSignup ? "Login" : "Create one"}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Auth;
