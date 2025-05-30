### 1. Introduction
In high-voltage power systems, suspension insulators are commonly used to support overhead conductors and electrically isolate them from transmission towers. These insulators are made up of a string of porcelain or composite discs connected in series.

Ideally, the applied voltage should divide equally across all discs, but in reality, due to the presence of stray and mutual capacitances, the voltage distribution is uneven. This causes the disc closest to the conductor to experience the highest voltage stress, potentially leading to premature failure.

---

### 2. Causes of Uneven Voltage Distribution

- **Stray Capacitance (C<sub>t</sub>):** Capacitance between each disc and the tower.
- **Mutual Capacitance (C<sub>d</sub>):** Capacitance between adjacent discs.

Due to these parasitic effects, the voltage is not uniformly distributed, with the bottom disc experiencing the highest voltage.

---

### 3. Mathematical Modeling

Let:
- \( V \) = Total voltage across the string
- \( n \) = Number of discs
- \( \alpha = \frac{C_t}{C_d} \)

#### For 3 discs:

\[
V_3 = \frac{V}{1 + \alpha + \alpha(1 + \alpha)}
\]
\[
V_2 = \alpha \cdot V_3
\]
\[
V_1 = \alpha(1 + \alpha) \cdot V_3
\]

#### General formula for \( i^{th} \) disc:
\[
V_i = V \cdot \frac{(1 + \alpha)^{n-i}}{\sum_{k=1}^{n} (1 + \alpha)^{n-k}}
\]

---

### 4. String Efficiency

String Efficiency (\( \eta \)) is defined as:
\[
\eta = \left( \frac{V}{n \cdot V_{\text{max}}} \right) \times 100
\]

Where:
- \( V \) = Total voltage across the string
- \( V_{\text{max}} \) = Maximum voltage across a single disc (typically the bottom one)

---

### 5. Methods to Improve Voltage Distribution

- **Capacitive grading:** Use of grading or corona rings
- **Increasing α:** Reduce stray capacitance by increasing disc spacing
- **Using better design materials:** Composite insulators with built-in grading features

---

### 6. Conclusion

Voltage distribution across suspension insulator strings is inherently non-uniform due to capacitive effects. Analyzing this distribution is critical for enhancing safety, reducing failure risks, and improving the efficiency and longevity of the transmission system. Engineering solutions like grading rings and optimized material designs play a vital role in improving performance.
