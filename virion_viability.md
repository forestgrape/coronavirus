# Virion Viability

## Content
* [Content](#content)
* [Summary Virion Viability](#summary-virion-viability)
  * [Decay Mechanisms and Rates](#decay-mechanisms-and-rates)
  * [Decay Situations in Practice](#decay-situations-in-practice)
* [Relevance](#relevance)
* [Recommended Literature](#recommended-literature)
* [Decay Mechanisms](#decay-mechanisms)
  * [Internal States](#internal-states)
  * [Extern Decay Factors](#extern-decay-factors)
  * [Extrinsic and Intrinsic Decay](#extrinsic-and-intrinsic-decay)
* [Decay Factors](#decay-factors)
  * [UV Light](#uv-light)
  * [Biochemicals](#biochemicals)
  * [Evaporation and Condensation](#evaporation-and-condensation)
  * [Osmotic Pressure](#osmotic-pressure)
  * [PH Values](#ph-values)
  * [Temperature](#temperature)
* [Decay by Building Blocks](#decay-by-building-blocks)
  * [Virion Building Blocks](#virion-building-blocks)
  * [RNA Decay](#rna-decay)
  * [Protein Decay](#protein-decay)
  * [Lipid Envelope Decay](#lipid-envelope-decay)
* [Decay Rate](#decay-rate)
  * [Measuring Infectious Virions](#measuring-infectious-virions)
  * [Exponential Decay](#exponential-decay)
  * [Estimates of Decay Rates](#estimates-of-decay-rates)
  * [Decay Rate by Mechanisms](#decay-rate-by-mechanisms)
* [References](#references)
  * [References Temperature](#references-temperature)

> [**in work, some parts are explorative**]

## Summary Virion Viability

[Virions](./coronavirus.md#virion) aren't very stable compared to other forms of live. The principal reasons for the instability of virion are:
* The genome is [stored in ssRNA](./coronavirus.md#ssrna)
* The envelope of coronaviruses consists of fatty acids acquired form the host cell and similar to the host cell membrane. In multicellular organism the cell-membranes neither have evolved to be stable outside the organism nor to keep out most substances. Cells also have ion pumps to even out osmotic pressures, without metabolism virions do not.
* Proteins: The spikes proteins are under tension, since they have spring loaded energy to induce cell membrane fusion. On heat, temperature changes or chemical forces the spikes can loose this energy. To a lesser extent this is also the case for the N protein.
* Virions have no metabolism and thus cannot repair any damage occurred or even out imbalances.


### Decay Mechanisms and Rates
Common decay mechanisms and their speeds, given as halflife times. 

#### Decay by UV Light
UV light yields the RNA unreadable. At low UV (e.g low sun in the fall) the halflife time is about 6 minutes and at intense UV (e.g. sun in summer) about 2 min. On cloudy days the UV is lower but still high enough to break the RNA.

> Even our stable DNA in the inner layer of the skin, protected by outer layer of the skin which contains light absorbing melanin (the more light absorbing melanin the less sunlight reaches the inner layer of the skin), a cell membrane and inside the cell nucleus takes damage from exposure to UV.

#### Decay by Biochemicals
Decay by biochemicals inactivate virions mainly from the outside by interacting with the spike protein or destroying the lipid envelope. Rates at room temperature (22 degree):
* In sputum/nasal mucus/saliva/on the skin the rates are in a similar range. The decay rate doubles about every 10 degrees temperature increase. The rate is highest at relative humidities such that the samples shrink due to evaporation but don't dry out.
  * at 4 degrees: about 5 to 10 hours
  * at 22 degrees: about 1 to 4 hours
* Common disinfectants (e.g. ethanol 70%, iodine 7.5%): a few seconds
* Soap: About 20 seconds

#### Decay without Extern Factors
[**to check/confirm, explorative section**]
Decay occurs also without extern factors and just depends on the internal state of a virion. This decay is called here self decay. Self decay happens primarily by RNA self-decay up to about 40 degrees celsius. Above about 45 degrees the proteins start loosing functionality.

The self decay rate can be approximated by a piecewise linear function:
* 4 to 40 degrees:  The rate doubles (the halftime halves) about every 5 degree temperature increase. The halflifetimes are about:
  * at 4 degrees: about   400 hours
  * at 20 degrees: about   80 hours
  * at 37 degrees: about   10 hours
* 40 to 45 degrees: The rate of the RNA decay and the spike deactivation is about the same with a halflifetime of 2 hours at 45 degrees.
* 45 to 60 degrees: The protein decay rate doubles (the halftime halves) roughly every 2 degrees or a little less. 
  * at 45 degrees the halflifetime is about 2 hours.
  * at 55 degrees the halflifetime is a few minutes.
* 65 to 75 degrees: The lipid envelope decays. 
  * at 70 degrees the halflifetime is about 10 seconds.


### Decay Situations in Practice
[Virions](./coronavirus.md#virion) decay happens everywhere: in the air, in the body, on surfaces and in water. Depending on the environment at different speed and with different mechanisms. In most situations one decay mechanism is much faster than the others, in that case the fastest decay determine the overall decay rate. In some situations different decay mechanisms interact or have similar speeds and so all of them have to be taken into account to estimate the overall decay.

* Outdoors during the day the UV part of sunlight quickly breaks the RNA of virions even on cloudy days.
* Virions are exhaled in samples of respiratory fluids, which contain biochemicals such as proteins, surfactants and salts. 
  * At an air humidity between about 40% to 70%: The samples shrink but do not dry out completely , the biochemicals act on the virions and the decay is quite fast since the droplet shrining increases the concentration of biochemicals.
  * At air humidity between 70% and 95%. The droplet size doesn't change that much so rates are similar as for the virions in a solution.
  * At an air humidity above 95%: The droplet expand there size in humid environment the virions can explode due to osmotic pressure, which results in a very fast decay.
  * At an air humidity below 40%: the droplets dry out the substances crystallize and only self decay occurs, which is slow at low temperatures.
* In the stomach virions are inactivated by acids.


## Relevance
[in work]

## Recommended Literature
[in work]
* [Marr et al](#marr) describe illustrative how the shrinking and growing of droplets affect the stability of influenza virions in their article "Mechanistic insights into the effect of humidity on airborne influenza virus survival, transmission and incidence"
* [Morris et al](#morris)



## Decay Mechanisms
[**in work**]
The virions decay depends on the internal state of the virion (such as the proteins, the RNA and the envelope) and extern factors (such as UV light).

### Internal States

> ##### Internal State
> The internal state denotes the physical and chemical characterization of a virion; namely the temperature, pH value and the building blocks (RNA, proteins, envelope) and possible other substances.

The internal state characteristics can be constant or variable throughout the life span of a virion:
- Constant throughout lifespan
  - Proteins (virion encoded proteins and some host acquired proteins)
  - host cell acquired substances e.g. fatty acids, lipid envelope
  - RNA genome (can point mutate).
- Variable throughout lifespan
  - Temperature
  - pH value
  - biochemicals able to pass the envelope

### Extern Decay Factors
A virion can decay through by being exposed to a decay factor which directly damage virions (e.g. UV light directly destroys RNA) or a factor can just modify the the decay rate of another mechanism. Often many factors interplay to yield the overall decay rate.



### Extrinsic and Intrinsic Decay

Virions decay on their own without the presence of extern factors. But  an extern factors such as UV light can induce a much faster decay such that the self decay becomes irrelevant.

> ##### Extern Induced Decay
> Extern induced/extrinsic decay is induced by external factors such as UV light or chemicals. Thus this decay mechanisms only occur if the factors are present.

> ##### Self Decay
> The self/intrinsic decay depends only on the [internal state](#internal-state) of the virion and not on external factors are necessary. Temperature is both an internal state and extern factor.




## Decay Factors

> ###### Decay Factor
> A _decay factor_ is anything that directly induces or modifies the decay of virions.


### UV Light
[in work]
The UV part of sun light renders RNA unreadable => RNA decay


### Biochemicals
[in work]
Extern biochemicals act on the spike or the envelope. Biochemicals entering the virion can act on intern or extern structures.

* __Digestive enzymes__ from other organisms e.g. bacteria in water (sea, oceans, rivers) or in the alimentary tract disintegrate the envelope.
* __Soap__ destroys the lipid envelope and so the virions.
* __Neutralizing antibodies__ can bind to the spike proteins and thereby the spike proteins loose the functionality to do the cell fusion.
* __Antiviral substances__ found in most body fluids destroy virions e.g. by changing the structure of the spike proteins, destroying the lipid envelope.
* __Proteins__ (even when they do not have enzymatic functions targeting virions) can interact with the spike protein and induce conformation changes whereby the spikes loose the ability to induce cell fusion.
* __Hydrogen Peroxide__: Denatures Proteins, RNA.


### Evaporation and Condensation
Evaporation and condensation affect the concentration of chemical and biological substances. Which can result in [osmotic pressure](#osmotic-pressure) and concentration changes of [biochemicals](#biochemicals).


### Osmotic Pressure
Droplets of any size in the air or on surfaces are subject to evaporation and condensation. The induced concentration changes of salts and proteins yield osmotic forces. 


### PH Values
[in work]
pH value alters the state of biochemicals and the virions. These effects alter other decay mechanisms.



### Temperature
[**in work, to check/confirm and cite**]

##### Temperature is the Kinetic Energy of Atom
The temperature denotes the average kinetic energy of the atoms a substance consists of. Temperature changes have enabling effects on mechanisms i.e.enable a certain mechanism or modifying effects i.e. change the speed of a mechanism.

#### Effects of Temperature
1. Higher temperatures enable and increase the probability of reactions upon collision due to higher kinetic energies of the atoms.
  => higher temperature increase the speed of nearly all decay mechanisms and for some decay mechanisms high temperatures are needed that they occur (with a relevant probability). 
2. Higher temperatures increase the number of collisions (faster movement). 
  => higher temperatures increase the speed of decay mechanisms requiring collisions e.g. [Biochemicals](#biochemicals)
3. Temperature influences the rates of [evaporation and condensation](#evaporation-and-condensation) at air-liquid interfaces.
  => Evaporation shrinks droplet and can increase the concentration of biochemicals or dry them out. Condensation growths droplets and reduce the concentration of biochemicals, which can induce [osmotic pressures](#osmotic-pressure).
4. Large molecules oscillate more at higher temperatures. This increase the 




## Decay by Building Blocks
[**in work**]


### Virion Building Blocks
Coronavirus virions are composed of three classes of building blocks: RNA, Proteins and a lipid envelope. Each class of these building blocks is subject to decay. From the outside accessible is only the envelope and the spikes protein. 


### RNA Decay
#### RNA Self Decay
RNA is not very stable and bases can mutate which yield unusable RNA
Modifying Factor: Temperature -> at increasing temperature RNA decays faster
#### RNA Decay by UV Light
UV light can cause structural changes in the RNA
Required Factor: UV Light


### Protein Decay
Coronaviruses have the proteins N = nucleocapsid protein, M = membrane protein, E = envelope protein and S = spike protein (some e.g. bovine coronaviruses additionally HE protein). 
* The spike proteins (and HE for coronaviruses where it is present) is most susceptible to loosing function since 1) the spikes point out from the envelope and thus is well accessible and exposed to substances on the outside. 2) The spikes are not in an energy minimized conformation to have spring loaded energy to initiate cell fusion, this tension makes the delicate.
* The N protein is not energy minimized thus at increased temperatures self decay occurs.
* The M and E protein are generally more stable than the S protein, so if any of the proteins looses function, it is most likely the S protein [to check and cite].

#### Spikes Self Decay
The spike protein of coronaviruses is temperature sensitive due to the spring loaded energy. Above 45 degree the spike can loose the functionality e.g. the transformation from pre- to post-fusion state can occur spontaneously.

#### Spike Decay by Biochemicals 
[Biochemicals](#biochemicals) can induce direct changes or accelerate other mechanisms.
* Proteins
  * Can bind and block functional groups such as cleavage sites or the RBD 
  * Induce conformational changes e.g. induce the transformation from pre- to post-fusion state.
* Neutralizing antibodies can bind to the spikes.

#### N Protein Self Decay
The N protein is conformation is not very stable at high temperatures and undergoes irreversible conformation changes.

#### Proteins E,M Decay
* The E an M proteins are more stable regarding self decay than the spikes and the N protein. 
* Regarding biochemicals, the spikes are more exposed to the outside, so the spikes loose functionality first [to confirm and cite].


### Lipid Envelope Decay
#### Factors Influencing Protein Decay
* Temperature: The lipid envelope looses stability and becomes more permeable at temperatures above 65 degrees [to check and cite].
* Osmotic Pressure: can explode the envelope [to confirm and cite]
* Biochemicals: E.g. soap make holes into the lipid envelope.



## Decay Rate
[**in work**]

### Measuring Infectious Virions
To measure infectious viruses cell culture experiments are necessary. The methods detecting building blocks of viruses (PCR and antigen tests) yield positive regardless whether the virions are intact and infectious (page [diagnosis and viral load](./diagnosis_and_viral_load.md)).

### Exponential Decay
When each member of a collection has some time independent chance to replicate or decay during a certain time span independent of the other members, the whole collection growths or decays exponentially. Examples:
* The decay of radioactive material is exponential since each atom has some probability to decay during a fixed time span.
* Change of prevalence of a disease in a homogenous  or at least time homogenous population (time homogenous is approximately true for SARS-2 strains at low numbers of infected throughout the population structure/groups).

In most circumstances virions decay independently of each other with a fixed probability during a given time span. Therefore the decay is exponential:
N(t) = k^t * N(0)  // N(t) = viability count at time t; k = decay factor; N(0) initial viability count i.e. at time 0

Common measures for the rate of an exponential decay are:
> Halflife time == log2 reduction time == half of the collection is intact == time to get a 50 % reduction

> Tenth-life time == log10 reduction time == a tenth of the collection is intact == time to get a 90% reduction

log2-reduction-time = log10(2) * log10-reduction-time


### Estimates of Decay Rates
At different situations different decay mechanisms are dominating the decay. Each decay mechanisms can be approximated by a linear function. Combined this yields a piecewise linear decay rate, at each piece the rate of the mechanisms with the fastest decay = smallest halflifetime.
* If UV light is present
* From 4 to 40 degrees:
  * If biochemicals are present the decay happens at the rate of the biochemical decay. 

### Decay Rate by Mechanisms

#### Rate of RNA Self Decay
[numbers to be checked/confirmed, explorative]
RNA self decay is the primary decay mechanism for temperatures below 40 degrees and without spike-protein decay through biochemicals. interactions protein-protein interactions where present in the setting (so either dry out samples at relative humidities below 25% or in a solution without protein interactions).. The numbers are rough estimates, estimated from investigations where likely n

The halflifetime doubles roughly every 4 to 7 degrees temperature decrease:
* at 4 degrees: about  300 - 400 hours
* at 20 degrees: about  80 - 120 hours
* at 31 degrees: about  30 -  40 hours
* at 35 degrees: about  15 -  20 hours
* at 39 degrees: about   7 -  11 hours
* at 43 degrees: about   3 -   5 hours
* at 45 degrees: about   2 hours
* at 47 degrees: about   1 hour


##### Rate of Protein Self Decay
At higher temperatures the proteins start to denature and loose their functionality (usually not reversible). The protein decay is varies across the coronavirus species and even single strains can adapt to become more heat tolerable. 

The halflifetime doubles roughly every 2 degrees temperature decrease:
* at 43 degrees: about   2 -  6 hours
* at 45 degrees: about   1 -  3 hours
* at 47 degrees: about  .5 -  1.5 hours
* at 51 degrees: about  10 - 25 minutes
* at 55 degrees: about  2  - 10 minutes

##### Lipid Envelope and Protein Decay
* at 70 degrees: about 10 seconds (lipid envelope and proteins)



## References
[**in work**]
### References Temperature
#### Guo
**Study on the decay characteristics and transmission risk of respiratory viruses on the surface of objects**

#### Casanova
Casanova, L.M., Jeon, S., Rutala, W.A., Weber, D.J., Sobsey, M.D., 2010. Effects of air temperature and relative humidity on coronavirus survival on surfaces. Appl. Environ. Microbiol. 76 (9), 2712–2717.
##### Methods
The survival of TGEV and MHV in cell culture medium at 9 temperature-humidity combinations - Temperatures (4 C, 20 C, 40 C)  X  Humidities (20%, 50%, 80%) - was determined.
##### Methods Details
* Viruses: "TGEV was grown in swine testicular (ST) cell cultures, and MHV was grown in delayed brain tumor (DBT) cell cultures."
* Virion Medium and Surfaces: "... viral inocula were suspended in cell culture medium (which contained proteins, other organic biomolecules, physiological salts, and other constituents and resembled human secretions) and placed on test surfaces. The test surfaces were carriers that were 1-cm2 thin stainless steel coupons with a no. 4 polish."
* Measuring: 
  * "Viral titers were determined by using quantal assays for cytopathic effects (CPE) and are expressed below as most probable numbers (MPN)."
  * "The virus survival at each time point was expressed as log10(Nt/N0), where Nt is the virus concentration (in MPN/ml) at time t and N0 is the initial virus concentration (in MPN/ml) in the control sample at time zero."
* Experiments: 
  * "For survival tests, 10 micro liter containing 104 to 105 MPN of test viruses was inoculated onto three replicate carriers per time point and placed in a controlled RH environment." 
  * "Control carriers (time zero) were kept at each AT and RH until they were dry and were sampled immediately after drying. The exception was the carrier incubated at 40°C and 80% RH. Under these conditions, virus inactivation took place within a few hours. Consequently, the carriers were sampled beginning at 2 h after inoculation, when the virus inoculum was still wet."
  * "Based on virus recovery experiments, 1.5% beef extract (pH 7.5) was used to elute viruses from carriers (data not shown). At desired time points, carriers were removed, placed in a 24-well plate, and covered with 1 ml beef extract. Viruses were eluted by agitation on a shaking platform (60 rpm) for 20 min at room temperature. Eluted samples were diluted in cell culture medium, and virus infectivity was assayed using the appropriate host cell line. Three replicate carriers were assayed per time point."

#### Chan 1 

##### Methods
* Virus Strain: HKU39849
* Cell Line: Foetal monkey kidney cells (FRhK- 4) 
* Cell Culture Medium: minimal essential medium (MEM, Gibco, USA) with 10% foetal calf serum and penicillin streptomycin (Gibco, USA)
* Virion Preparation and Medium: 
  * "Stock virus was harvested when infection approximately 75% of the cell monolayer of a virus infected flask manifested cytopathic effect (CPE). Infected cells were subjected to one cycle of freeze and thaw centrifuged at 2000 rpm for 20 minutes to remove cell debris and the culture supernatant was aliquoted and stored at −80◦C until use."
  *  Maintenance medium containing 107 TCID50 per mL of virus
* Experiment: 
  * "Ten microlitre of maintenance medium containing 107 TCID50 per mL of virus was placed in individual wells of a 24- well plastic plates and allowed to dry at room temperature (22∼25◦C) and relative humidity of 40–50% (i.e., conditions prevailing in a typical air-conditioned room)."
  * "The experiment was repeated at different temperatures (38◦ C, 33◦ C, 28◦ C) and relative humidities (>95%, 80∼89%) for 3hr, 7hr, 11hr, 13hr, and 24hr. A nebulizer under a controlled condition was used to generate high and relative low humidity environment. All the experiments above were conducted in duplicate and the residual viral infectivity was titrated."
  

#### Chan 2
**Factors affecting stability and infectivity of SARS-CoV-2**
##### Methods Summary
"The residual virus in dried form or in solution was titrated on to Vero E6 cells on days 0, 1, 3, 5 and 7 after incubation at different temperatures. Viral viability was determined after treatment with various disinfectants and pH solutions at room temperature (20-25 C)."
##### Methods Details
* Cells and Cell Medium: "Vero E6 cell line was cultured in minimal essential medium (MEM, Gibco, Gaithersburg, MD, USA) with 10% fetal bovine serum (FBS, Gibco), penicillin and streptomycin (Gibco)."
* Virus Strains: SARS-CoV-2 HKU-001a and SARS-CoV HKU39849
* Virion Preparation and Medium: "Virus propagated in Vero E6 cells was maintained in MEM with 1% FBS, and was stored at -80C until use."
* Experiments: 
  * Effect of drying and heat
    * "Ten microlitres of virus (SARS-CoV-2, 106.5 TCID50/mL; SARS- CoV, 107 TCID50/mL) was placed on a glass slide within a shell vial, kept at room temperature (20 - 25 C and relative humidity of 63%) and allowed to dry in accordance with the authors’ previous study with slight modifications [6]." // previous study is [Chan 1](#chan-1)
    * "One hundred microlitres of MEM were used to resuspend the virus for 0, 1, 3, 5 and 7 days after incubation at different temperatures: refrigerator (4oC), room temperature (25 C) and two incubators with different temperatures (33 C and 37C)."
    * "Controls were viruses in solution, and stored in closed screw cap tubes with similar treatment."
  * Stability in disinfectants
    "Thirty microlitres of SARS-CoV-2 (106.5 TCID /mL) and 270 50 mL of various disinfectants were mixed and incubated at room temperature (Table I)."

##### Results
* "When the virus was added to 90% FBS or MEM and was heated at 56C for 30 min, viability in both FBS and MEM was reduced by at least 3 logs (3.580.29)."



#### Riddell

##### Methods
* Virus Strain: SARS-CoV-2 (Betacoronavirus/Australia/ SA01/2020)
* Virus Culture: "The virus was passaged four times through Vero E6 cells (ATCC CRL- 1586) in Dulbecco’s Modified Eagle Medium (DMEM) supplemented with Penicillin, Streptomycin, Fungizone and 10% fetal calf serum and pelleted via ultracentrifugation at 100,000×g for 90 min."
* Material/Surface Preparation: "All surfaces were prepared by cutting into approx. 1–1.5 cm2 coupons, non-porous surfaces were disinfected prior to use by washing in a mild detergent (Beck- man 555), rinsing in distilled water and then immersing in 80% v/v ethanol. Paper bank notes (in very good condition) were heated in a dry oven to 75 °C for 1 h to reduce bacterial/viral contamination. The 100% cotton cloth was steam sterilised prior to use."
* Experiments Settings:
  * Preparation: "Stock virus was diluted in a defined organic matrix, consisting of bovine serum albumin (BSA), mucin and tryptone, following international standard ASTM E2197 [15], designed to mimic the composition of body secretions. Briefly, 360 μL of virus stock was added to 160 μL of a solution consisting of 2.5 mg/mL BSA, 3.5 mg/mL tryptone and 0.8 mg/mL mucin. Ten microlitres of the result- ing suspension (final concentration of 3.38×105/10 μL) was inoculated onto the centre of the coupon and allowed to dry in a BSCII for 1 h."
  * "Once dry, the coupons were placed into a humidified climate chamber (Memmert HPP110) for specified time points. Samples were incubated in the dark to limit any effect light might have on viral decay. A single humidity set point (50% relative humidity) was maintained for each of three separate temperature experiments (20 °C, 30 °C, 40 °C)."
* Virion Recovery: "For non-porous surfaces, for each replicate, virus was eluted in 2×115 μL volumes of DMEM with repeated pipetting then titrated individually, in quadruplicate wells on a 96-well plate. For recovery from cotton cloth, inoculated swatches of the cloth were individually submersed in 500 μL DMEM and pipetted repeatedly for at least 1 min before 230 μL of the recovered eluent from each swatch was titrated separately,5 in quadruplicate."
* Measuring Survival: "The virus was resuspended in phosphate buffered saline (PBS) with 1% bovine serum albumin (BSA) and stored at − 80 °C. The virus stock was titrated on Vero E6 cells and the TCID 50 was determined to be 4.97×107/mL by the Spearman–Karber method [12, 13]."

##### Results

#### Chin 
Chin, A.W.H., Chu, J.T.S., Perera, M.R.A., Hui, K.P.Y., Yen, H.-L., Chan, M.C.W., Peiris, M., Poon, L.L.M., 2020. Stability of SARS-CoV-2 in different environmental conditions. The Lancet Microbe 1 (1).

#### Morris
**The effect of temperature and humidity on the stability of SARS-CoV-2 and other enveloped viruses**
https://doi.org/10.1101/2020.10.16.341883

#### Laude
**Thermal Inactivation Studies of a Coronavirus, Transmissible Gastroenteritis Virus**

##### Methods
Measure the decay rate of 
##### Methods Details
* Virus Strain: "Purdue and the D52 strains were used as the source of transmissible gastroenteritis virus (TGEV)"
* Cell and Virus Cultures: "The virus was propagated in the pig kidney cell line RP_D, and maintained in Eagle's minimum essential medium (MEM) containing 2% calf serum; the cultures were frozen at -70 °C at the first signs of c.p.e."
* Sample Preparation and Medium: "Supernatant fluids from infected cultures were thawed and then clarified by low-speed centrifugation before dilution 1:10 in a 50 mM-HEPES solution (Sigma) buffered at pH 7 or 8, and supplemented with antibiotics. For short incubations this solution was preheated before adding the virus. One ml amounts in glass tubes were placed in well-stirred water baths in the dark. Duplicate aliquots were removed at given times and stored at -70 °C until titration of infectivity."
##### Results
* "An exponential decrease of infectivity, without an initial shoulder, could be observed between 31 and 51 °C. Thus, the inactivation proceeded as a first-order reaction, implying that the virus preparations were homogeneous." // Figure 1 a and b
* "At a higher temperature (55 °C) a two component curve was observed (omitted for clarity), a finding which has been occasionally recognized with some other RNA viruses (see Ginoza, 1968)."
* "Thermal inactivation of the virus at pH 8 showed that the half-life at any temperature is markedly reduced (Fig. 1 b)."
* "Thermal inactivation of a coronavirus essentially resembles that observed previously with several other RNA viruses. TGEV thermal inactivation is mediated by two thermodynamically distinct reactions below and above 45 °C."

#### Marr
Marr LC, Tang JW, Van Mullekom J, Lakdawala SS. 2019 
**Mechanistic insights into the effect of humidity on airborne influenza virus survival, transmission and incidence.** J. R. Soc. Interface 16: 20180298. 
https://dx.doi.org/10.1098/rsif.2018.0298


#### Biryukov
Biryukov J, Boydston JA, Dunning RA, Yeager JJ, Wood S, Reese AL, Ferris A, Miller D, Weaver W, Zeitouni NE, Phillips A, Freeburger D, Hooper I, Ratnesar-Shumate S, Yolitz J, Krause M, Williams G, Dawson DG, Herzog A, Dabisch P, Wahl V, Hevey MC, Altamura LA. 2020. **Increasing temperature and relative humidity accelerates inactivation of SARS-CoV- 2 on surfaces.** 
mSphere 5:e00441-20. 
https://doi.org/10.1128/mSphere.00441-20

#### Methods
* "Vero (ATCC CCL-81) cells were used to propagate SARS-CoV-2 and in virus microtitration assays. Cells were cultured at 37°C and 5% CO2 in complete growth medium (gMEM) as previously described (16)."
* Experiment: 
  * "Virus stability was measured using multiple RH and temperature combinations ranging from approximately 20 to 80% RH and 24 to 35°C." 