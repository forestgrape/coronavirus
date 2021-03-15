# Virion Viability

## Content
* [Content](#content)
* [Short Summary Virion Viability](#short-summary-virion-viability)
* [Extended Summary Virion Viability](#extended-summary-virion-viability)
  * [Decay Situations in Practice](#decay-situations-in-practice)
  * [Decay Mechanisms and Rates](#decay-mechanisms-and-rates)
* [Relevance](#relevance)
* [Recommended Literature](#recommended-literature)
* [Decay Factors](#decay-factors)
  * [UV Light](#uv-light)
  * [Biochemicals](#biochemicals)
  * [Evaporation and Condensation](#evaporation-and-condensation)
  * [Concentration Changes](#concentration-changes)
  * [Osmotic Pressure](#osmotic-pressure)
  * [PH Values](#ph-values)
  * [Temperature](#temperature)
* [Decay Mechanisms](#decay-mechanisms)
  * [Virion Properties](#virion-properties)
  * [Virion Building Blocks](#virion-building-blocks)
  * [RNA Decay](#rna-decay)
  * [Protein Decay](#protein-decay)
  * [Lipid Envelope Decay](#lipid-envelope-decay)
* [Calculating Decay Rates](#calculating-decay-rates)
  * [Measuring Infectious Virions](#measuring-infectious-virions)
  * [Exponential Decay](#exponential-decay)
* [Measured Decay Rates in different Situations](#measured-decay-rates-in-different-situations)
  * [Rates for UV Light](#rates-for-uv-light)
  * [Rates for Temperature, Humidity Combinations](#rates-for-temperature-humidity-combinations)
  * [Self Decay Rates](#self-decay-rates)
* [References](#references)
  * [References Temperature Viability SARS-2](#references-temperature-viability-sars-2)
  * [References Temperature Viability of other Viruses](#references-temperature-viability-of-other-viruses)
  * [References UV](#references-uv)

> [**in work, some parts are explorative**]


## Short Summary Virion Viability
At different situations different mechanisms are the principal drivers of the decay. Usually one decay mechanism is much faster than all others so only this fastest has to be accounted for. 

* Halflifetime a few Seconds
  * Disinfectants
  * Temperatures above 70 degrees
* Halflifetime a few Minutes
  * Sunlight
  * Temperatures above 50 degrees
* Halflifetime a couple of  hours
  * In respiratory tract fluids such as mucus/saliva or on the skin (which all have some antiviral activity) at room temperature or above as long as the samples are not dried out.
  * Lower Respiratory Tract at 37 degrees
* Halflifetime half a day or more
  * Dried samples or single virions at or below room temperatures



## Extended Summary Virion Viability

### Decay Situations in Practice
[Virions](./coronavirus.md#virion) decay happens everywhere: in the air, in the body, on surfaces and in water. Depending on the environment at different speeds and with different mechanisms. In many situations one decay mechanism is much faster than the others, in this case the overall decay rate can be approximated by the fastest decay rate. In some situations different decay mechanisms interact or have similar speeds and so all of them have to be taken into account to estimate the overall decay.

* Outdoors during the day the UV part of sunlight quickly breaks the RNA. Even on cloudy days and in the evening this decay is relevant although slower than at sunny noon.
* Virions are exhaled in samples of respiratory fluids, which contain biochemical substances such as proteins, surfactants and salts. These biochemicals cause decay of the virions.
  * At an air humidity between about 40% to 70%: The samples shrink but do not dry out. The shrinking increases the concentration of biochemicals and thus the decay rate.
  * At an air humidity between 70% and 95%: The droplets shrink less and the decay rates are similar as for the virions in a solution.
  * At an air humidity above 95%: The droplet expand there size in humid environments. A faster decay rate is observed. 
  * At an air humidity below 40%: the droplets dry out the substances crystallize. The decay rate is lower since biochemicals do not interact with the virions.
* In the stomach virions are inactivated by acids.


### Decay Mechanisms and Rates

[Virions](./coronavirus.md#virion) aren't very stable compared to other forms of live. The principal reasons for the instability of virion are:
* The genome is [stored in ssRNA](./coronavirus.md#ssrna)
* The envelope of coronaviruses consists of fatty acids acquired form the host cell and similar to the host cell membrane. In multicellular organism the cell-membranes neither have evolved to be stable outside the organism nor to keep out most substances. Cells also have ion pumps to even out osmotic pressures, without metabolism virions do not.
* The spikes proteins are under tension, since they have spring loaded energy to induce cell membrane fusion. On heat, temperature changes or chemical forces the spikes can loose this energy. To some extent this is also the case for the N protein.
* Virions have no metabolism and thus cannot repair damage or even out chemical imbalances.


#### Decay by UV Light
UV light yields the RNA unreadable. At low UV (e.g low sun in the fall) the halflife time is about 6 minutes and at intense UV (e.g. sun in summer) about 2 min. On cloudy days the UV is lower but still high enough to break the RNA.

> Even our stable DNA in the inner layer of the skin, protected by outer layer of the skin which contains light absorbing melanin (the more light absorbing melanin the less sunlight reaches the inner layer of the skin), a cell membrane and inside the cell nucleus takes damage from exposure to UV.

#### Decay by Biochemicals
Decay by biochemicals inactivate virions mainly from the outside by interacting with the spike protein or destroying the lipid envelope. Rates at room temperature (22 degree):
* In sputum/nasal mucus/saliva/on the skin the rates are in a similar range. The decay rate doubles about every 10 degrees temperature increase. 
  * at 4 degrees: about 5 (around 50% humidity) to 10 hours (around 20% humidity).
  * at 22 degrees: about 1 hour (around 50% relative humidity) to 4 hours (around 20% humidity).
* Common disinfectants (e.g. ethanol 70%, iodine 7.5%): a few seconds
* Soap: About 20 seconds

#### Self Decay
[**to check/confirm, explorative section**]
Self decay denotes the decay which always occurs even without extern factors. The self decay depends on the internal state of a virion. Self decay happens primarily by RNA self-decay up to about 40 degrees celsius. Above about 45 degrees the proteins start loosing functionality.

The self decay rate can be approximated by a piecewise linear function:
* 4 to 45 degrees: Decay mainly due to RNA self decay. The rate doubles (the halftime halves) about every 5 degree temperature increase. 
  * at 4 degrees: about   400 hours
  * at 20 degrees: about   80 hours
  * at 37 degrees: about   10 hours
  * at 45 degrees: The rate of the RNA decay and the protein deactivation is about the same with a combined halflifetime of 2 hours.
* 45 to 60 degrees: Decay mainly due to decay of the spring-loaded (metastable) proteins. The rate doubles (the halftime halves) roughly every 2 degrees.
  * at 45 degrees the halflifetime is about 180 minutes hours.
  * at 55 degrees the halflifetime is 2 - 6 Minutes (depending on the coronavirus species; about 2 minutes for SARS-CoV-2).
* 60 to 75 degrees: The lipid envelope decays.
  * at 70 degrees the halflifetime is about 10 seconds.



## Relevance
[in work]

## Recommended Literature
[in work]
* [Marr et al](#marr) describe illustrative how the shrinking and growing of droplets affect the stability of influenza virions in their article "Mechanistic insights into the effect of humidity on airborne influenza virus survival, transmission and incidence"
* [Morris et al](#morris)
* [Laude](#laude)
* [Flemming](#flemming)



## Decay Factors
A virion can decay through by being exposed to a decay factor which directly damage virions (e.g. UV light directly destroys RNA) or a factor can just modify the the decay rate of another mechanism. Often many factors interplay to yield the overall decay rate.

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
* __Proteins__  can interact with the spike protein and induce conformation changes whereby the spikes loose the ability to induce cell fusion (no enzymatic functions regarding virions is required).
* __Hydrogen Peroxide__: Denatures Proteins, RNA.


### Evaporation and Condensation
Evaporation and condensation affect amount of water in samples. Which has the effects:
* the [concentration](#concentration-changes) of chemical and biological substances is increased at evaporation respectively decreased at condensation.
  * Just before droplets dry out (which is around a relative humidity of 30 to 40%) virions decay fastest   
* if in the air the changed size affects how the particles behave in the air i.e. whether they tend to fall down (at condensation) or to fly (at evaporation).


### Concentration Changes
Concentration changes in the environment (which can e.g. result from condensation or evaporation).
* Increased concentration can increase the decay by the decay by [biochemicals](#decay-by-biochemicals).
* Decreased concentration in the environment can yield:
  - [Osmotic Pressure](#osmotic-pressure)
  - Influence the [internal state](#internal-states) e.g. more water inside can increase the degrees of freedom the RNA has to move, which yields a faster decay.


### Osmotic Pressure
[to check/confirm, explorative section]
Different concentrations on the two sides of a semipermeable membrane induce osmotic forces on the membrane, especially since virions don't have ion pumps.


### PH Values
[in work]
pH value alters the state of biochemicals and the virions. These effects alters the decay rates (e.g. shown in [Laude](#laude)).


### Temperature
[**in work, to check/confirm and cite**]

The temperature denotes the average kinetic energy of the atoms a substance consists of. Temperature changes have enabling effects on mechanisms i.e.enable a certain mechanism or modifying effects i.e. change the speed of a mechanism.

#### Effects of Temperature
1. Higher temperatures enable and increase the probability of reactions upon collision due to higher kinetic energies of the atoms.
  => higher temperature increase the speed of nearly all decay mechanisms and for some decay mechanisms high temperatures are needed that they occur (with a relevant probability). 
2. Higher temperatures increase the number of collisions (faster movement).
  => higher temperatures increase the speed of decay mechanisms requiring collisions e.g. [Biochemicals](#biochemicals).
3. Temperature influences the rates of [evaporation and condensation](#evaporation-and-condensation) at air-liquid interfaces.
  => Evaporation shrinks droplet and can increase the concentration of biochemicals or dry them out. Condensation growths droplets and reduce the concentration of biochemicals, which can induce [osmotic pressures](#osmotic-pressure).
4. Large molecules oscillate more at higher temperatures. This increases the chances for decay of large molecules which drive the [self decay](#self-decay) of virions.



## Decay Mechanisms
[**in work**]

### Virion Properties
The virions decay depends on:
* the [internal state](#internal-state) of the virion (such building blocks 
* [Extern factors](#extrinsic-and-self-decay) (such as UV light)

##### Internal State
> The *internal state* denotes the physical and chemical characterization of a virion. The internal state has constant and variable characteristics:
> - Mostly constant for virions of a given lineage and their lifespan: Virus produced [Building Blocks](#virion-building-blocks) (RNA genome, proteins) 
> - Mostly constant throughout the lifespan of a virions: Host-cell acquired building blocks(envelope)  and other host acquired substances such as fatty acids or salts.
> - Variable throughout the virion lifespan
    - Temperature
    - pH value
    - biochemicals able that pass the envelope


Virions decay that just depends on the internal state and happens without extern factors is called self decay:

> ##### Self Decay
> The intrinsic/self decay depends only on the [internal state](#internal-state) of the virion and not on external factors are necessary. Temperature is both an internal state and extern factor.

The self decay occurs always. However in the presence of extern factors often the self decay is comparatively low so just the decay caused by extern factors has to be taken into account:

> ##### Extern Induced Decay
> Extern induced/extrinsic decay is induced by external factors such as UV light or chemicals. Thus this decay mechanisms only occur if the factors are present.


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
* The spike proteins (and HE for coronaviruses where it is present) is most susceptible to loosing function since 1) the spikes point out from the envelope and thus is well accessible and exposed to substances on the outside. 2) The spikes are not in an energy minimized conformation since since they are spring loaded to initiate cell fusion (prefusion state). The tension makes them delicate and without metabolism once released the spike can't go back to the spring loaded state.
* The N protein is not energy minimized thus at increased temperatures self decay occurs [to check and cite].
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




## Calculating Decay Rates
[**in work**]

### Measuring Infectious Virions
To measure infectious viruses cell culture experiments are necessary. The methods detecting building blocks of viruses (PCR and antigen tests) yield positive regardless whether the virions are intact and infectious (page [diagnosis and viral load](./diagnosis_and_viral_load.md)).

### Exponential Decay
When each member of a collection has some time independent chance to replicate or decay during a certain time span independent of the other members, the whole collection growths or decays exponentially. Examples:
* The decay of radioactive material is exponential since each atom has some probability to decay during a fixed time span.
* Change of prevalence of a disease in a homogenous  or at least time homogenous population (time homogenous is approximately true for SARS-2 strains at low numbers of infected throughout the population structure/groups).

In most circumstances virions decay independently of each other with a fixed probability during a given time span. In these situations the decay is exponential:
N(t) = e^(k*t) * N(0)  // N(t) = viability count at time t; k = decay rate; N(0) initial viability i.e. at time 0

Common measures for the rate of an exponential decay are:
> Halflife time == log2 reduction time == half of the collection is intact == time to get a 50 % reduction

> Tenth-life time == log10 reduction time == a tenth of the collection is intact == time to get a 90% reduction

The following equations hold (by properties of the exp and the log functions):
* 90%-reduction time = log2(10) * halflifetime
* k = ln(2) / halflifetime


## Measured Decay Rates in different Situations

### Rates for UV Light
The halflife time of UV light depends on the light intensity but not so much on other factors [to check, the matrix is relevant in some studies].

Sources:
* [Schuit](#summary-schuit)
* [Ratnesar-Shumate](#summary-ratnesar-shumate)

Intensity UVB (W/m^2)| Situation | Halflifetime in Minutes
--|--|--
1.5 - 2 | Summer Sun at 40 N | 2 - 4.5 
.7 - 1  | Autumn Sun at 40 N | 5 - 6 
0.3     | Winter Sun at 40 N | 15 


### Rates for Temperature, Humidity Combinations

Sources:
* [Riddell](#riddell): Temperatures (20,30,40), Humidity (50%)
* [Morris](#morris): Temperatures (10,22,27), Humidity (40%, 65%, 80%)
* [Casanova](#casanova): Temperatures (4,20,40), Humidity (20%, 50%, 80%)
* [Chan 11](#chan-1): Temperatures (28,33,38), Humidity (85%,95%)

Estimates:
Temperature\Humidity|20| 50 | 80 
--|--|--|--
 5| 100 - 300 | 40 - 50   | 60 - 80
20|10 - 100   | 4 - 40    | 10 - 20
30| 3 - 25    | 1.5 - 10  | 2.5 - 10
40| 2- 8      | .5 - 2    | 0.5 - 4

Observations:
The following pattern of decay rates is observed (described e.g. in [Morris](#morris) or in [])
* The halflife time is long in very dry settings when the samples dry out => no chemical reactions between the spikes and proteins in the solution
* The halflifetime is short at humidities between 40 - 60% when the droplets shrink
### Self Decay Rates
[numbers to be checked/confirmed, explorative]
By definition [self decay](#self-decay) occurs in the absence of external factors. To know the self decay rate is useful to have a lower bound the decay rates at different temperatures. 

The self decay rates are estimated from environment with the lowest observed decay rates at a given temperature. The lowest rates are observed when the samples are either dried out (at relative humidities below 25%) or in favorable solvents.
The numbers are based mainly on the investigations:
* [Laude](#summary-laude): TGEV coronaviruses are solved in a PH buffer solution.
* [Casanova](#summary-casanova): MHV and TGEV in MEM and at 20% relative humidity.

#### Until about 45 degrees: RNA Self Decay
The primary self decay mechanism is RNA self decay. The rate of the RNA decay is similar across different RNA viruses [to check and cite].
The halflifetime doubles roughly every 4 to 7 degrees temperature decrease:
  * at  4 degrees: about 300 - 400 hours
  * at 20 degrees: about  80 - 120 hours
  * at 35 degrees: about  15 -  20 hours
  * at 39 degrees: about   7 -  11 hours
  * at 43 degrees: about   3 -   5 hours
  * at 45 degrees: about       2.5 hours

#### From about 45 degrees: Protein Decay 
At higher temperatures the proteins start to denature and loose their functionality (usually not reversible). 
* The protein decay is varies across the coronavirus species  and even single strains can adapt to become more heat tolerable ([Laude](#laude)). 
* The halflifetime doubles roughly every 2 degrees temperature decrease.
  * at 45 degrees: about  80 - 180 hours
  * at 47 degrees: about  40 -  90 hours
  * at 51 degrees: about  10 -  25 minutes
  * at 55 degrees: about   2 -  10 minutes

#### From about 70 degrees: Lipid Envelope and Protein Decay
* at 70 degrees: about 10 seconds (lipid envelope and proteins)




## References
[**in work**]
### References Temperature Viability SARS-2
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

#### Chan 11
**The Effects of Temperature and Relative Humidity on the Viability of the SARS Coronavirus**
##### Methods
The viability of SARS-CoV-1 is determined for the following conditions: 
* in solution and at dried at 40-50% humidity at room temperature.
* dried virions at temperatures (28,33,38) and humidities (80-85%, 95%).
##### Methods Details
* Cells:
  * Cell Line: Foetal monkey kidney cells (FRhK- 4) 
  * Cell Culture Medium: minimal essential medium (MEM, Gibco, USA) with 10% foetal calf serum and penicillin streptomycin (Gibco, USA)
* Virus: 
  * Virus Strain: HKU39849
  * "Stock virus was harvested when infection approximately 75% of the cell monolayer of a virus infected flask manifested cytopathic effect (CPE). Infected cells were subjected to one cycle of freeze and thaw centrifuged at 2000 rpm for 20 minutes to remove cell debris and the culture supernatant was aliquoted and stored at −80◦C until use."
  *  Maintenance medium containing 107 TCID50 per mL of virus
* Experiment: 
  * "Ten microlitre of maintenance medium containing 107 TCID50 per mL of virus was placed in individual wells of a 24- well plastic plates and allowed to dry at room temperature (22∼25◦C) and relative humidity of 40–50% (i.e., conditions prevailing in a typical air-conditioned room)."
  * "The experiment was repeated at different temperatures (38◦ C, 33◦ C, 28◦ C) and relative humidities (>95%, 80∼89%) for 3hr, 7hr, 11hr, 13hr, and 24hr. A nebulizer under a controlled condition was used to generate high and relative low humidity environment. All the experiments above were conducted in duplicate and the residual viral infectivity was titrated."
##### Results
"The dried virus on smooth surfaces retained its viability for over 5 days at temperatures of 22–25◦C and relative humidity of 40–50%, that is, typical air-conditioned environments. However, virus viability was rapidly lost (>3 log10) at higher temperatures and higher relative humidity (e.g., 38◦C, and relative humidity of >95%)."
  

#### Chan 20
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
* "When the virus was added to 90% FBS or MEM and was heated at 56C for 30 min, viability in both FBS and MEM was reduced by at least 3 logs (3.58, 0.29)."



#### Riddell
**The effect of temperature on persistence of SARS-CoV-2 on common surfaces**
##### Methods
"This study measured the survival rates of infectious SARS-CoV-2, suspended in a standard ASTM E2197 matrix, on several common surface types. All experiments were carried out in the dark, to negate any effects of UV light. Inoculated surfaces were incubated at 20 °C, 30 °C and 40 °C and sampled at various time points."
##### Methods Details
* Virus Strain: SARS-CoV-2 (Betacoronavirus/Australia/ SA01/2020)
* Virus Culture: "The virus was passaged four times through Vero E6 cells (ATCC CRL- 1586) in Dulbecco’s Modified Eagle Medium (DMEM) supplemented with Penicillin, Streptomycin, Fungizone and 10% fetal calf serum and pelleted via ultracentrifugation at 100,000×g for 90 min."
* Material/Surface Preparation: "All surfaces were prepared by cutting into approx. 1–1.5 cm2 coupons, non-porous surfaces were disinfected prior to use by washing in a mild detergent (Beck- man 555), rinsing in distilled water and then immersing in 80% v/v ethanol. Paper bank notes (in very good condition) were heated in a dry oven to 75 °C for 1 h to reduce bacterial/viral contamination. The 100% cotton cloth was steam sterilised prior to use."
* Experiments Settings:
  * Preparation, Matrix: "Stock virus was diluted in a defined organic matrix, consisting of bovine serum albumin (BSA), mucin and tryptone, following international standard ASTM E2197 [15], designed to mimic the composition of body secretions. Briefly, 360 μL of virus stock was added to 160 μL of a solution consisting of 2.5 mg/mL BSA, 3.5 mg/mL tryptone and 0.8 mg/mL mucin. Ten microlitres of the resulting suspension (final concentration of 3.38×105/10 μL) was inoculated onto the centre of the coupon and allowed to dry in a BSCII for 1 h."
  * "Once dry, the coupons were placed into a humidified climate chamber (Memmert HPP110) for specified time points. Samples were incubated in the dark to limit any effect light might have on viral decay. A single humidity set point (50% relative humidity) was maintained for each of three separate temperature experiments (20 °C, 30 °C, 40 °C)."
* Virion Recovery: "For non-porous surfaces, for each replicate, virus was eluted in 2×115 μL volumes of DMEM with repeated pipetting then titrated individually, in quadruplicate wells on a 96-well plate. For recovery from cotton cloth, inoculated swatches of the cloth were individually submersed in 500 μL DMEM and pipetted repeatedly for at least 1 min before 230 μL of the recovered eluent from each swatch was titrated separately,5 in quadruplicate."
* Measuring Survival: "The virus was resuspended in phosphate buffered saline (PBS) with 1% bovine serum albumin (BSA) and stored at − 80 °C. The virus stock was titrated on Vero E6 cells and the TCID 50 was determined to be 4.97×107/mL by the Spearman–Karber method [12, 13]."
##### Results
"We obtained half lives of between 1.7 and 2.7 days at 20 °C, reducing to a few hours when tem- perature was elevated to 40 °C."



#### Chin 
Chin, A.W.H., Chu, J.T.S., Perera, M.R.A., Hui, K.P.Y., Yen, H.-L., Chan, M.C.W., Peiris, M., Poon, L.L.M., 2020. 
**Stability of SARS-CoV-2 in different environmental conditions.** 
The Lancet Microbe 1 (1).

#### Morris
**The effect of temperature and humidity on the stability of SARS-CoV-2 and other enveloped viruses**
https://doi.org/10.1101/2020.10.16.341883

##### Methods
* "We measured the environmental stability of SARS-CoV-2 virions suspended in cell culture medium deposited onto a polypropylene plastic surface at nine environmental conditions: three relative humidities (RH; 40 %, 65 %, and 85 %) at each of three temperatures (10 C, 22 C, and 27 C)."
* "We measured the evaporation kinetics of suspension medium under the same temperature and humidity conditions as the virus stability experiments"
##### Methods Details
* "We quantified infectious virus titer over time and estimated virus decay rates and corresponding half-lives in each condition using a simple Bayesian regression model (see Methods)."
* Experiments:
  * Matrix: "We prepared a solution of Dulbecco’s Modified Eagle Medium (DMEM, a common cell culture medium) supplemented with 2mM L-glutamine, 2% fetal bovine serum and 100 units/mL penicillin/streptomycin, and containing 105 TCID50/mL SARS-CoV-2. "
  * "We prepared 216 disks corresponding to three replicates per eight post-deposition time-points (0, 1, 4, 8, and 24 hours, then daily for 4 days) for the nine conditions."
  * Recovery: "At each time-point, samples were collected by rinsing the disks with 1mL of DMEM and stored at 80 C until titration."
##### Results
* "Overall, measured virus decay became markedly faster as temperature increased across all humidities, with decay at 27 C roughly five to ten times faster than decay at 10 C. Across temperatures, virus decay exhibited a U-shaped dependence on RH: roughly two to five times faster at 65% RH than at 40% and 100% RH (Fig. 1a)."
##### Meta-analysis
* Table summarizing several coronavirus viability studies (halflifetimes given).
* "To test the validity of our model beyond the measured environmental conditions (i.e., beyond 10– 27 C and 40–85 % RH), we compiled data from 11 published studies on human coronaviruses, including SARS-CoV-2, SARS-CoV-1, MERS-CoV, HCoV-OC43 and HCoV-299E, under 17 temperature-RH conditions. We generated estimates of half-life and uncertainties (Extended Data Table 2) and compared those estimates to the half-lives predicted by the mechanistic model parametrized from our SARS-CoV-2 data."



#### Laude
**Thermal Inactivation Studies of a Coronavirus, Transmissible Gastroenteritis Virus**

> Similar to [Fleming](#fleming), recommended to read in parallel.
##### Methods
The decay rate of the TGEV coronavirus at temperatures between 31 and 55 degrees at the pH values 7 and 8 is determined.
##### Methods Details
* Virus Strain: "Purdue and the D52 strains were used as the source of transmissible gastroenteritis virus (TGEV)"
* Cell and Virus Cultures: "The virus was propagated in the pig kidney cell line RP_D, and maintained in Eagle's minimum essential medium (MEM) containing 2% calf serum; the cultures were frozen at -70 °C at the first signs of c.p.e."
* Sample Preparation and Medium: "Supernatant fluids from infected cultures were thawed and then clarified by low-speed centrifugation before dilution 1:10 in a 50 mM-HEPES solution (Sigma) buffered at pH 7 or 8, and supplemented with antibiotics. For short incubations this solution was preheated before adding the virus. One ml amounts in glass tubes were placed in well-stirred water baths in the dark. Duplicate aliquots were removed at given times and stored at -70 °C until titration of infectivity."
##### Results
* "An exponential decrease of infectivity, without an initial shoulder, could be observed between 31 and 51 °C. Thus, the inactivation proceeded as a first-order reaction, implying that the virus preparations were homogeneous." // Figure 1 a and b
* "At a higher temperature (55 °C) a two component curve was observed (omitted for clarity), a finding which has been occasionally recognized with some other RNA viruses (see Ginoza, 1968)."
* "Thermal inactivation of the virus at pH 8 showed that the half-life at any temperature is markedly reduced (Fig. 1 b)."
* "Thermal inactivation of a coronavirus essentially resembles that observed previously with several other RNA viruses. TGEV thermal inactivation is mediated by two thermodynamically distinct reactions below and above 45 °C."


#### Biryukov
Biryukov J, Boydston JA, Dunning RA, Yeager JJ, Wood S, Reese AL, Ferris A, Miller D, Weaver W, Zeitouni NE, Phillips A, Freeburger D, Hooper I, Ratnesar-Shumate S, Yolitz J, Krause M, Williams G, Dawson DG, Herzog A, Dabisch P, Wahl V, Hevey MC, Altamura LA. 2020. **Increasing temperature and relative humidity accelerates inactivation of SARS-CoV- 2 on surfaces.** 
mSphere 5:e00441-20. 
https://doi.org/10.1128/mSphere.00441-20
#### Methods
* "Vero (ATCC CCL-81) cells were used to propagate SARS-CoV-2 and in virus microtitration assays. Cells were cultured at 37°C and 5% CO2 in complete growth medium (gMEM) as previously described (16)."
* Experiment: 
  * "Virus stability was measured using multiple RH and temperature combinations ranging from approximately 20 to 80% RH and 24 to 35°C." 


### References Temperature Viability of other Viruses

#### DiGoia
**Thermal Inactivation of Newcastle Disease Virus**
##### Methods
"The rate of destruction of hemagglutinins and infectivity of Newcastle disease virus was determined over a temperature range of 37.8 to 60C."
##### Results
"From the calculated values of delta H and delta S,it was concluded that inactivation of the hemagglutinating activity and viral infectivity was due to protein denaturation."

#### Fleming
**Thermal Inactivation of Semliki Forest Virus**
##### Methods
* First the influence of the originating cells and the surrounding matrix was determined to select a appropriate model for the thermal inactivation studies.
* The inactivation of homogenous virions at temperatures between 2o° and 50° degrees in different dilution of stabilizing medium was determined.
##### Results
* Influence of originating cells:
  * At 35°, the rate of inactivation was independent of the originating cell lines (Figure 2 a).
  * At 50°, only virions originating from a stable cell line (mouse embryo cells) showed a 1 step log-linear inactivation. For other cells lines a 2 step log-linear inactivation is observed (Figure 2 b).
* At 22° if the medium 199, CS was diluted by a phosphate buffer solution the virions lost stability (Figure 1 and 3). The loss of stability was shifted to higher dilutions in the dark (Figure 1).
* The arrhenius plots in Figure 3 and the corresponding values in Table 1:
  * There's a switch of the inactivations mechanism between 40 and 45 degrees.
  * Apart from the switch of mechanisms around 45 degrees, the mechanisms do not change but the rates are higher
    * at higher dilutions of the 199, CS medium
    * at a pH of 6.5 instead of 7.5.
* The decay at 50° (but not the decay at 35° or by UV radiation) induces a reduced neutralization by antibodies, which indicates changes of the surface proteins. However since the neutralizing tests were done by an excess of antibodies, this change was faster than the reduction of viability.


#### Marr
Marr LC, Tang JW, Van Mullekom J, Lakdawala SS. 2019 
**Mechanistic insights into the effect of humidity on airborne influenza virus survival, transmission and incidence.** 
J. R. Soc. Interface 16: 20180298. https://dx.doi.org/10.1098/rsif.2018.0298


### References UV
#### Schuit
**Airborne SARS-CoV-2 Is Rapidly Inactivated by Simulated Sunlight**
[in work]

> Remark: similar and same research group as [Ratnesar-Shumate](#ratnesar-shumate)
##### Methods
"This study examined effect of simulated sunlight, relative humidity, and suspension matrix on stability of SARS-CoV-2 in aerosols."
##### Methods Details
* Culturing: "Vero Cells (ATCC CCL-81) were grown at 37°C and 5% CO2 in culture medium, consisting of minimum essential medium (Gibco) supplemented with 10% heat-inactivated fetal bovine serum (Hyclone or Atlanta Biologicals), 2 mM GlutaMAX (Gibco), 0.1 mM nonessential amino acids solution (Gibco), 1 mM sodium pyruvate (Gibco), and 1% antibiotic-antimycotic solution (Gibco)."
* Matrix: "For aerosol tests, aliquots of the concentrated virus were thawed and diluted 1:10 in either fresh culture medium or simulated saliva, formulated as described in the ASTM standard for measuring virus decontamination efficacy [25], but prepared with KH2PO4 and K2HPO4 at final concentrations of 15.4 mM and 24.6 mM, respectively. "
* Experiments:
  * "Tests were conducted in both suspension matrices across a range of relative humidity levels (20%, 45%, and 70%) and simulated sunlight intensities (darkness, midintensity, and high intensity)."
##### Results
* "Mean decay rates (± SD) in simulated saliva, under simulated sunlight levels representative of late winter/early fall and summer were 0.121 ± 0.017 min−1 (90% loss, 19 minutes) and 0.306 ± 0.097 min−1 (90% loss, 8 minutes), respectively."
* At high intensity light and high humidity the decay was faster in saliva than in culture medium.


#### Ratnesar-Shumate
**Simulated Sunlight Rapidly Inactivates SARS-CoV-2 on Surfaces**
[in work]

> Remark: similar and same research group as [Schuit](#schuit)
##### Methods
"In the present study, simulated sunlight rapidly inactivated SARS-CoV-2 suspended in either simulated saliva or culture media and dried on stainless steel coupons."
##### Methods Details
* Cell Cultures: "Vero cells (ATCC CCL-81) were cultured at 37°C and under 5% CO2 in complete growth medium (gMEM) consisting of minimum essential medium (Life Technologies) supplemented with 10% v/v heat-inactivated fetal bovine serum (Sigma Aldrich), 2 mM Glutamax (Life Technologies), 0.1 mM nonessential amino acids (Life Technologies), 1 mM sodium pyruvate (Life Technologies), and 1% v/v antibiotic-antimycotic solution (Life Technologies)."
* Virion Harvesting: "At 72 hours post infection, the flasks were removed from the incubator, frozen at −80°C for at least 1 hour, thawed at 37°C, and the contents of the flasks clarified by centrifugation at 2000g for 10 minutes at 4°C. The clarified supernatant was concentrated approximately 10-fold using a 100 000 molecular weight cutoff cross flow cassette (VF20P4; Sartorius), then stored at −80°C in 1 mL aliquots until use."
* Experiment:
  * Light: "The light spectrum was designed to represent natural sunlight, specifically in he ultraviolet (UV) range (280–400 nm), and closely matched model spectra from the National Center for Atmospheric Research’s (NCAR) tropospheric ultraviolet and visible (TUV) radiation model in this range [15] (Figure 2)."
  * "The temperature and relative humidity inside the chamber were maintained within a narrow range for testing, specifically 20 ± 4°C and 19 ± 5%, respectively."
  * "For each day of experiments, a frozen aliquot of concentrated virus was thawed and diluted 1:10 into either gMEM or a simulated saliva. The simulated saliva formulation represents a suspension medium that mimics the properties of saliva, specifically tonicity, pH, and protein content, and was similar to previously published recipes [17, 18] with the exceptions of KH2PO4 and K2HPO4, which were present at 15.4 mM and 24.6 mM."
  * Amount: 5-μL droplets
##### Results
* "Ninety percent of infectious virus was inactivated every 6.8 minutes in simulated saliva and every 14.3 minutes in culture media when exposed to simulated sunlight representative of the summer solstice at 40°N latitude at sea level on a clear day. Significant inactivation also occurred, albeit at a slower rate, under lower simulated sunlight levels."
* Inactivation is about 2 times faster in saliva compared to culture medium.


