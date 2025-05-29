1. Introduction
In high-voltage transmission lines, pin-type and suspension-type insulators are used to mechanically support the conductor and provide electrical insulation from the transmission tower. When using suspension insulators, multiple disc-shaped insulators are connected in series to form an insulator string. Ideally, the voltage across each disc should be uniform, but in practice, due to capacitive effects, the voltage distribution is non-uniform — the disc nearest to the conductor experiences the maximum voltage stress.

Understanding and analyzing the voltage distribution is crucial for:

Designing safe and reliable insulator strings.

Preventing premature failure due to overvoltage stress.

Improving the string efficiency.

2. Causes of Uneven Voltage Distribution
The main cause of non-uniform voltage distribution is the presence of stray capacitances:

Capacitance between each disc and the tower (C<sub>t</sub>).

Capacitance between adjacent discs (C<sub>d</sub>) — also known as mutual capacitance.

These parasitic capacitances cause the potential drop to be higher across the lower discs (closer to the conductor).
  4. Mathematical Expression
Let:

n be the number of discs,

V be the total voltage across the string,


5.Voltage across each disc (for 3 discs):
Using nodal analysis or equivalent circuit simplification, we can derive:

V₃ = V / (1 + α + α(1 + α))

V₂ = α × V₃

V₁ = α(1 + α) × V₃

6.General formula (for any n):
 Voltage Across i-th Disc (Simple Formula)
Let:

V = total voltage across the string

α = ratio of tower-to-disc capacitance to disc-to-disc capacitance

n = total number of discs

i = disc number (counted from top to bottom, i = 1 to n
V_i = V × (1 + α)^(n - i) / Σ[(1 + α)^(n - k)]  for k = 1 to n

6. String Efficiency

String efficiency (η) is defined as
V = total voltage across the insulator string

n = number of discs

V_max = voltage across the disc with the highest voltage (usually the bottom disc)

Then String Efficiency (%) = (V / (n × V_max)) × 100

7. Methods to Improve Voltage Distribution
Capacitive grading: Using additional metal rings to redistribute voltage.

Increasing α: Reducing tower-to-disc capacitance (by increasing spacing).

Using insulators with built-in grading

8. Conclusion:
   
Voltage distribution across insulator strings is inherently non-uniform due to stray capacitances. The disc nearest the conductor experiences the highest voltage stress, which can lead to flashover or failure. Understanding the distribution pattern using equivalent circuits and mathematical modeling helps in design optimization and increasing string efficiency. Techniques like grading rings and improved material design can help achieve more uniform distribution, ensuring the safety and durability of high-voltage transmission lines.
