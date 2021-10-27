# PCR Diagnosis

## Use cases
PCR test can be used both to diagnose microorganisms causing a disease and to detect microorganisms being part of the healthy state microbiome. In healthy state the virus numbers are usually very low and often below the limit of detection. Thus the prevalence of viruses is usually much higher than the PCR positives.

## PCR Sensitivity and Accuracy
> The following a rough estimates for common setting. The PCR sensitivity and accuracy for different settings (it on the apparatus, the exact protocol and the primers used).

* *Ct value > 35:* PCR tests detect coronavirus RNA reliable for concentrations higher than 10^2 copies/microliter = 10^5 copies/milliliter which corresponds to a Ct value of 35 (e.g. shown by [Vogels et al](#vogels)). Above this value the standard deviation is about 2 cycles.
* *Ct value < 35:* Below 10^2 copies/microliter = 10^5 copies/milliliter the sensitivity decreases and is about 25% to 50% for 10^4 cp/milliliter. For lower concentrations such as 1000 cp/milliliter the sensitivity is further reduced. The accuracy is not given at these values, it's just a value below 10^5 cp/milliliter.


## From Ct Values to Viral Load
> This is a conceptual description and technical difficulties are not considered (e.g. in a cycle the RNA is not precisely doubled but rather increases e.g. by the factor 1.8 since the the efficacy is usually around 90%).

The viral load measurements often work as follows: specific sequences are doubled in cycles until the concentration is high enough that they can be detected by optical methods. When there are already many sequences to start with, one needs fewer doubling cycles (Ct cycles) until detection. Thus few cycles correspond to a high number of sequences in the sample to test (= a high viral load in the sample).

The corresponding calculations go as follows: The viral load is doubled in cycles until detectable: `2^number_of_cycles * viral_load = d_c_h` where `d_c_h = detection_limit_for_helper_method` (the helper method detects when a certain concentration of DNA or RNA is reached, often optical fluorescence is used). Rearranged:
`viral_load = d_c_h / 2^number_of_cycles` 

The minimal viral load detectable:
`viral_load_detection_limit * 2^max_number_of_cycles = helper_method_detection_limit`

Often the viral load is given as logarithm:
`log2(viral_load) = log2(d_c_h) - number_of_cycles`
The viral load as logarithm to base 10:
`log10(viral_load) =log2(viral_load)/log2(10) = (log2(d_c_h) - number_of_cycles)/3.32`

An example formulas for specific protocols:
* [Yilmaz et al](./diagnosis_and_viral_load.md#summary-yilmaz).

## References

### PCR Accuracy and Sensitivity

#### Vogels
Analytical sensitivity and efficiency comparisons of SARS-CoV-2 RT–qPCR primer–probe sets


#### Walkers