# Virion Stability and Decay

## Content
* [Content](#content)
* [Summary Virion Stability and Decay](#summary-virion-stability-and-decay)
* [Decay Rate](#decay-rate)
  * [Measuring Infectious Virions](#measuring-infectious-virions)
  * [Exponential Decay](#exponential-decay)
  * [Virion Decay](#virion-decay)
  * [Quantifying Decay Rate](#quantifying-decay-rate)
* [Decay Factors](#decay-factors)
  * [Temperature](#temperature)
  * [PH Values](#ph-values)
  * [Evaporation and Condensation](#evaporation-and-condensation)
  * [Osmotic Pressure](#osmotic-pressure)
  * [UV Light](#uv-light)
  * [PH Values](#ph-values-1)
  * [Biochemicals](#biochemicals)
* [Decay Mechanism](#decay-mechanism)
  * [RNA Decay](#rna-decay)
  * [Protein Decay](#protein-decay)
  * [Lipid Envelope Decay](#lipid-envelope-decay)
* [References](#references)
  * [References Temperature](#references-temperature)

[**in work, summary more or less ok, other parts in raw form**]

## Summary Virion Stability and Decay
[Virions](./coronavirus.md#virion) aren't very stable compared to other forms of live. The principal reasons for the instability of virion are:
* The genome is [stored in unstable ssRNA](./coronavirus.md#ssrna)
* The envelope of coronaviruses consists of fatty acids which form the cell membranes of the virus host organism. In multicellular organism the cell membranes neither have evolved to be stable outside the organism nor to keep out most substances.
* The spike store have spring loaded energy which is used for cell fusion. Thus the spikes are under tension. On heat, temperature changes or chemical forces the spikes can loose this energy.
* Virions have no metabolism and thus cannot repair any damage occurred.

[Virions](./coronavirus.md#virion) decay happens everywhere: in the air, in the body, on surfaces and in water. Depending on the environment at different speed and with different mechanisms. In some situations the decay is dominated by one mechanisms, in other situations different decay mechanisms have to be taken into account to estimate the overall decay. Due the different mechanisms at different situations estimating the decay can be complicated. 

Decay mechanism in different situations are:
* Outdoors during the day the UV part of sunlight quickly breaks the RNA of virions even on cloudy days.
* Intrinsic decay (decay without extern influences) is mainly governed by intrinsic RNA decay up to about 45 degrees celsius. Above about 45 degrees the spike proteins start loosing functionality becomes the main decay mechanism.
* Virions exhaled in samples of respiratory fluids, which biochemicals such as antivirals, proteins and salts.
  * As long as the samples don't dry out, the biochemicals act on the virions. The resulting inactivation is  
  * If the droplet expand there size in humid environment the virions can explode due to osmotic pressure.
  * If the droplets dry out the substances crystallize and only intrinsic decay occurs.
* In the stomach virions are inactivated by acids.



## Decay Rate

### Measuring Infectious Virions
To measure infectious viruses cell culture experiments are necessary. The methods detecting building blocks of viruses (PCR and antigen tests) yield positive regardless whether the virions are intact and infectious (page [diagnosis and viral load](./diagnosis_and_viral_load.md)).

### Exponential Decay
When each member of a collection has some time independent chance to replicate or decay during a certain time span independent of the other members, the whole collection growths or decays exponentially. Examples:
* The decay of radioactive material is exponential since each atom has some probability to decay during a fixed time span.
* Change of prevalence of a disease in a homogenous  or at least time homogenous population (time homogenous is approximately true for SARS-2 strains at low numbers of infected throughout the population groups).

### Virion Decay
In most circumstances virions decay independently of each other with a fixed probability during a given time span. Therefore the decay is exponential.

### Quantifying Decay Rate
Common measures for the rate of an exponential decay are:
* half life time = half of the collection is intact = time to get a 50 % reduction =  log2 reduction time 
* tenth life time = a tenth of the collection is intact = time to get a 90% reduction = log10 reduction time 



## Decay Factors

A decay factor can directly damage virions (e.g. UV light directly destroys RNA) or a factor can just modify the the decay rate of another mechanism. Often many factors interplay to yield the overall decay rate. 

> ##### Direct Effects
> Direct effects denote the direct damage of a factor.

> ##### Modifying Effects
> Modifying effects alternate rate of other decay mechanisms.


### Temperature
[**in work and to check/confirm and cite**]
The temperature is denotes the average kinetic energy of the atoms a substance consists of. Higher temperature 1) can enable and increase the probability of reactions upon collision and 2) increases the number of collisions. 
By 1) higher temperature can enable and increase the speed of self decay mechanisms 

#### Direct Effect on Self Decay
* Proteins can undergo conformation changes and loose functionality.
* RNA decays faster at higher temperature.
* The lipid envelopes looses stability.

#### Modifying Effects on Other Decay Factors
* Temperature changes effect [evaporation and condensation](#evaporation-and-condensation). The water amount changed induces [osmotic forces](#osmotic-pressure).
* Increased speed of [biochemical reactions](#biological-and-chemical-substances)

### PH Values
At temperatures around 22 degrees PH values between 3 and 10 don't do much to destroy virions. However changes of the PH values alter the intrinsic decay of virions e.g. at temperatures between 30 degrees and 55 degrees the decay is elevated if the PH value is 8 instead of 7.

### Evaporation and Condensation
Evaporation and condensation affect the concentration of chemical and biological substances. Which can result in [osmotic pressure](#osmotic-pressure) and concentration changes of [biochemicals](#biochemicals).

### Osmotic Pressure
Droplets of any size in the air or on surfaces are subject to evaporation and condensation. The induced concentration changes of salts and proteins yield osmotic forces. 

### UV Light
[in work]
The UV part of sun light destroys RNA. Even stable DNA in the inner layer of the skin, protected by outer layer of the skin which contains light absorbing melanin (the more light absorbing melanin the less sunlight reaches the inner layer of the skin), a cell membrane and inside the cell nucleus takes damage from exposure to UV. => RNA decay

### PH Values
* PH values between 3 and 10 mainly adapt the rate of other factors. 
* Extreme PH values below 3 or above 10 actively inactivate CoVs. => Proteins, Envelope

### Biochemicals
[in work]
* __Digestive enzymes__ from other organisms e.g. bacteria in water (sea, oceans, rivers) or in the alimentary tract disintegrate the envelope.
* __Soap__ destroys the lipid envelope and so the virions.
* __Neutralizing antibodies__ can bind to the spike proteins and thereby the spike proteins loose the functionality to do the cell fusion.
* __Antiviral substances__ found in most body fluids destroy virions e.g. by changing the structure of the spike proteins, destroying the lipid envelope.
* __Proteins__ (even when they do not have enzymatic functions targeting virions) can interact with the spike protein and induce conformation changes whereby the spikes loose the ability to induce cell fusion.
* __Hydrogen Peroxide__: Denatures Proteins, RNA.
=> Extern substances act on the spike or the envelope.
=> Substances entering the virion can act on intern or extern structures.


## Decay Mechanism
Coronavirus virions are composed of three classes of building blocks: RNA, Proteins and a lipid envelope. Each class of these building blocks is subject to decay. From the outside accessible is only the envelope and the spikes protein.

On this page, intrinsic decays and extrinsic decays are distinguished:

> ##### Self Decay
> The self decay depends only on the [internal state](#internal-state) of the virion and not on (external) decay factors.

> ##### Internal State
> The internal state denotes the physical and chemical characterization of a virion. he internal state is the temperature, ph value and the building blocks (RNA, proteins, envelope) and possible other substances.

> ##### Factor Induced Decay
> Factor induced decay is induced by external factors such as UV light or chemicals.


The internal state characteristics can be constant or variable throughout the life span of a virion:
- Constant: proteins present (the exact number of virus proteins and other host cell acquired proteins),  host cell acquired substances e.g. fatty acids, lipid envelope.
- Variable: PH value, temperature


### RNA Decay

#### RNA Self Decay
RNA is not very stable and bases can mutate which yield unusable RNA
Modifying Factor: Temperature -> at increasing temperature RNA decays faster

#### RNA Decay by UV Light
UV light can cause structural changes in the RNA
Required Factor: UV Light

### Protein Decay
Coronaviruses have the proteins N = nucleocapsid protein, M = membrane protein, E = envelope protein and S = spike protein (some additionally HE). 
* The spike proteins is most susceptible to loosing function since 1) the spikes point out from the envelope and thus is well accessible and exposed to substances on the outside. 2) The spikes are not in an energy minimized conformation to have spring loaded energy to initiate cell fusion, this tension makes the delicate.
* The M, E and N protein are generally more stable than the S protein, so if any of the proteins looses function, it is most likely the S protein [to check and cite].

#### Spikes Self Decay
The spike protein of coronaviruses is temperature sensitive due to the spring loaded energy. Above 45 degree the spike can loose the functionality e.g. the transformation from pre- to post-fusion state can occur spontaneously.

#### Spike Decay by Biochemicals 
[Biochemicals](#biochemicals) can induce direct changes or increase the 
* Proteins
  * Can bind and block functional groups such as cleavage sites or the RBD 
  * Induce conformational changes e.g. induce the transformation from pre- to post-fusion state.
* Neutralizing antibodies can bind to the spikes.

#### E,M,N Decay
These proteins are more stable than the spikes and the spikes are more exposed to the outside, so the spikes loose functionality first [to confirm and cite].

### Lipid Envelope Decay
#### Factors Influencing Protein Decay
* Temperature: The lipid envelope looses stability and becomes more permeable at higher temperatures.
* Osmotic Pressure: can explode the envelope
* Biochemicals: E.g. soap



## References
### References Temperature
#### Guo
**Study on the decay characteristics and transmission risk of respiratory viruses on the surface of objects**

#### Casanova
Casanova, L.M., Jeon, S., Rutala, W.A., Weber, D.J., Sobsey, M.D., 2010. Effects of air temperature and relative humidity on coronavirus survival on surfaces. Appl. Environ. Microbiol. 76 (9), 2712–2717.

#### Chin 
Chin, A.W.H., Chu, J.T.S., Perera, M.R.A., Hui, K.P.Y., Yen, H.-L., Chan, M.C.W., Peiris, M., Poon, L.L.M., 2020. Stability of SARS-CoV-2 in different environmental conditions. The Lancet Microbe 1 (1).

#### Morris
**The effect of temperature and humidity on the stability of SARS-CoV-2 and other enveloped viruses**

