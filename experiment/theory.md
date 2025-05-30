📘 Theory of Voltage Distribution Across a String of Suspension Insulators

In high-voltage transmission systems, suspension insulators are employed to support conductors and provide necessary insulation from the supporting structures. These insulators are typically arranged in a series of discs, forming what is known as an insulator string.
In an ideal scenario, the voltage would distribute uniformly across each disc in the insulator string. However, due to the presence of shunt capacitance (capacitance between each metal fitting and the grounded tower) and self-capacitance (capacitance between the metal fittings of each disc), the voltage distribution becomes non-uniform. The disc nearest to the conductor experiences the highest voltage stress, while the voltage across each subsequent disc decreases progressively towards the tower.

2.⚙️Non-Uniform Voltage Distribution
The presence of shunt capacitance causes the voltage to distribute unevenly, with the disc nearest to the conductor experiencing the highest voltage stress.
Ideally, the voltage across each disc in the insulator string would be equal, resulting in uniform stress distribution. However, in practice, the voltage distribution is non-uniform due to the presence of:

*Self-Capacitance (Mutual Capacitance): Each insulator disc has capacitance between its metal fittings.

*Shunt Capacitance: Capacitance exists between the metal parts of each disc and the grounded tower or earth.
As we move towards the tower, each subsequent disc experiences less voltage. This non-uniform distribution can lead to over-stressing of the lower discs, increasing the risk of flashover and insulator failure.

3.🔍String Efficiency
String efficiency is a measure of the uniformity of voltage distribution across the insulator string.
String Efficiency (%) = (Total Voltage / (n × Voltage across lowest disc)) × 100
Where:

.n = number of insulator discs

.Voltage across lowest disc = voltage across the disc nearest to the conductor
A string efficiency of 100% indicates perfect uniformity, which is ideal but practically unattainable. Higher string efficiency implies a more uniform voltage distribution, reducing the risk of insulator failure.

4.🧮 Mathematical Analysis
Let:

V = total voltage across the string,

n = number of insulator discs,

α = C_t / C = ratio of shunt to series capacitance,

V_i = voltage across the i-th insulator (i = 1 is top, i = n is bottom).

Then the voltage across the i-th insulator is:

V_i = V × (1 + α)^(n - i) / Σ[(1 + α)^(n - k)], for k = 1 to n

This formula shows that voltage across the discs increases exponentially toward the bottom of the string.

5.📊Voltage Distribution Characteristics
The bottom-most insulator (disc closest to the conductor) carries the highest voltage.

The top-most disc (near the tower) carries the least voltage.

This leads to non-uniform stress and reduces the overall efficiency of the insulation system.


6.🔶 Improving Voltage Distribution

Capacitance grading: Use discs with different capacitances

Guard rings: Reduces voltage on lower units

Increasing creepage distance: Enhances surface insulation

7. ✅ Conclusion
The study of voltage distribution across string insulators is essential for designing reliable high-voltage transmission systems. Due to the non-uniform distribution caused by stray capacitances, the bottom insulators carry disproportionately high voltage, increasing the risk of failure.
A better understanding of this phenomenon leads to higher string efficiency, increased reliability, and longer lifespan of transmission systems.









