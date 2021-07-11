# Virion Viability with a Focus on Coronaviruses

## Content
* [Content](#content)
* [Short Summary Virion Viability](#short-summary-virion-viability)
* [Summary Virion Viability](#summary-virion-viability)
  * [Summary Decay by UV Light](#summary-decay-by-uv-light)
  * [Summary Decay in Disinfecting Biochemicals](#summary-decay-in-disinfecting-biochemicals)
  * [Summary Decay in Aerosols](#summary-decay-in-aerosols)
  * [Summary Decay in Respiratory Fluids](#summary-decay-in-respiratory-fluids)
  * [Summary Self Decay](#summary-self-decay)
* [Introduction](#introduction)
  * [Overview](#overview)
  * [What's done and added here](#whats-done-and-added-here)
  * [Relevance](#relevance)
* [Measuring and Modelling the Viability of Virions](#measuring-and-modelling-the-viability-of-virions)
  * [Measuring Infectious Virions](#measuring-infectious-virions)
  * [Modelling the Viability](#modelling-the-viability)
* [Viability Observations](#viability-observations)
  * [Viability in Sunlight](#viability-in-sunlight)
  * [Decay upon Exposure to Disinfectants](#decay-upon-exposure-to-disinfectants)
  * [Viability in Ambient Air](#viability-in-ambient-air)
  * [Self Decay Situations](#self-decay-situations)
* [Decay Factors](#decay-factors)
  * [Introducing Decay Factors](#introducing-decay-factors)
  * [Radiation](#radiation)
  * [Chemicals and Biochemicals](#chemicals-and-biochemicals)
  * [Concentration Changes](#concentration-changes)
  * [Osmotic Pressure](#osmotic-pressure)
  * [Temperature](#temperature)
  * [Virion Properties](#virion-properties)
* [Theoretical Principles and Decay Mechanisms](#theoretical-principles-and-decay-mechanisms)
  * [Mechanism of Radiation](#mechanism-of-radiation)
  * [Mechanism of Chemicals and Biochemicals](#mechanism-of-chemicals-and-biochemicals)
  * [Mechanism of Temperature](#mechanism-of-temperature)
* [Decay  by Building Blocks](#decay--by-building-blocks)
  * [RNA Stability](#rna-stability)
  * [Protein Decay](#protein-decay)
  * [Lipid Envelope Decay](#lipid-envelope-decay)
* [References](#references)
  * [References Temperature Viability SARS-2](#references-temperature-viability-sars-2)
  * [References Temperature Viability of other Viruses](#references-temperature-viability-of-other-viruses)
  * [References Droplets and Influenza](#references-droplets-and-influenza)
  * [References UV](#references-uv)
* [Appendix](#appendix)
  * [Efflorescence Humidity](#efflorescence-humidity)


> * **some parts are and marked as explorative**
> * some parts of the page are in work
> * **some data/values need additional checking**
> * pointing out mistakes is appreciated




## Short Summary Virion Viability
The decay of coronavirus virions is driven by different mechanisms in different situations. The halflife times ranges from seconds for disinfectants to weeks in dry and cool air.

Selected situations grouped by the halflifetimes:
* Halflifetime below a minute
  * Disinfectants
  * Temperatures above 70 degrees
* Halflifetime a couple of minutes
  * Sunlight
  * Temperatures above 50 degrees
* Halflifetime a couple of  hours
  * In respiratory tract fluids such as mucus/saliva or on the skin (which all have some antiviral activity) at room temperature as long as the samples are not dried out.
  * Lower Respiratory Tract at 37 degrees.
* Halflifetime half a day or more
  * Dried samples or single virions at or below room temperatures.

The halflifetimes are temperature dependent: 
* Between 0 and 45 degrees the halflifetime halve with about every 5 degrees temperature increase. 
* Above 45 degrees, the halflifetimes halve about every 2 degrees temperature increase.



## Summary Virion Viability

[Virions](../2_biological/viruses.md#virion) decay happens everywhere: in the air, in the body, on surfaces and in water. Coronavirus virions decay fast compared to other forms of life.
Depending on the environment at different speeds and with different mechanisms. In many situations one decay mechanism is much faster than the others, in this case the overall decay rate can be approximated by the fastest decay rate. In some situations different decay mechanisms interact or have similar speeds and so all of them have to be taken into account to estimate the overall decay.

The principal reasons for the fast decay are:
* The genome is [stored in ssRNA](../2_biological/life-forms.md#ssrna)
* The envelope of coronaviruses consists of fatty acids acquired form the host cell and similar to the host cell membrane. In multicellular organism the cell-membranes neither have evolved to be stable outside the organism nor to keep out most substances. Cells also have ion pumps to even out imbalances such as osmotic pressures, without metabolism virions do not.
* The spikes proteins are under tension, since they have spring loaded energy to induce cell membrane fusion. On heat, temperature changes or chemical forces the spikes can loose this energy. To some extent this is also the case for the N protein.
* Virions have no metabolism and thus cannot repair damage or even out chemical imbalances.


### Summary Decay by UV Light
UV light renders the RNA unreadable. At low UV (low sun in the fall) the halflife time is about 6 minutes and at intense UV (sun at noon in the summer) about 2 min.

### Summary Decay in Disinfecting Biochemicals
Decay by biochemicals inactivate virions mainly from the outside by interacting with the spike protein or destroying the lipid envelope. Rates at room temperature (22 degree):
* Common disinfectants (e.g. ethanol 70%, iodine 7.5%): a below a minute.
* Soap: Below a minute.
* Acids: In the stomach the acids induce a fast decay.

### Summary Decay in Aerosols
As long as solute, virions exhaled in aerosol decay quite fast and mainly due to interactions with other solutes (respiratory tract fluids contain some antiviral substances). When the air is very dry the samples dry out, which causes biochemical reactions to stop.
* At an air humidity below the [efflorescence humidity](#efflorescence-humidity) (about 30% to 40%)): In dry air the droplets dry out the substances crystallize. The decay rate is lower since biochemicals do not interact with the virions.
* At an air humidity just above the [efflorescence humidity](#efflorescence-humidity) (about 40% to 60%): The samples shrink but do not dry out. The shrinking increases the concentration of biochemicals and thus the decay rate increases.
* At an air humidity between 60% and 95%: The droplets shrink less and the decay rates are similar as for the virions in a solution.
* At an air humidity above the [condensation humidity] (about 95%): The droplet expand there size in humid environments. A faster decay rate is observed.

### Summary Decay in Respiratory Fluids
Typical rates are:
In sputum/nasal mucus/saliva/on the skin the rates are in a similar range. The decay rate doubles about every 10 degrees temperature increase. 
* at 4 degrees: about 5 (around 50% humidity) up to 10 hours or more (dry air = around 20% humidity).
* at 22 degrees: about 1 hour (around 50% relative humidity) to 4 hours or more (around 20% humidity).

### Summary Self Decay 

> explorative

Self decay denotes the decay mechanisms which are present even without radiation or decay inducing biochemicals. Self decay is a lower bound for the decay rate of virions.

The self decay rate can be approximated by a piecewise linear function:
* 4 to 45 degrees: Decay mainly due to RNA self decay. The rate doubles (the halftime halves) about every 5 degree temperature increase. 
  * at fridge temperature (4 degrees): about   400 hours
  * at room temperature (20degrees): about   80 hours
  * at body temperature (37 degrees): about   10 hours
  * at 45 degrees: The rate of the RNA decay and the protein deactivation is about the same with a combined halflifetime of 2 hours.
* 45 to 60 degrees: Decay mainly due to decay of the spring-loaded (metastable) proteins. The rate doubles (the halftime halves) roughly every 2 degrees.
  * at 45 degrees the halflifetime is about 180 minutes hours.
  * at 55 degrees the halflifetime is 2 - 6 Minutes (depending on the coronavirus species; about 2 minutes for SARS-CoV-2).
* 60 to 75 degrees: The lipid envelope decays.
  * at 70 degrees the halflifetime is about 10 seconds.



## Introduction

### Overview

* [Measuring and Modelling the Viability of Virions](#measuring-and-modelling-the-viability-of-virions) How to measure the decay and calculate log reductions and halflifetimes and so on.

* [Viability Experiments and Observations](#viability-experiments-and-observations) Experiments and observations of the viability of coronavirus virions in different situations. A focus is on situations of practical relevance such as decay upon UV light or disinfectant exposure and viability in aerosols. Situations where low decay rates are observed are described: Dry and cool air without sunlight.

* [Decay Factors](#decay-factors)
  From the decay observations, factors relevant for the decay of virions are extracted.
  * Which extern influences induce or increase the decay of virions. In practice these factors often interplay.
  * The viability depends on the [properties of a virion](#virion-properties). The virion properties in turn depend on the originating cell and the genome which can adapt in just a few generations.
  
* [Theoretical Principles and Decay Mechanisms](#theoretical-principles-and-decay-mechanisms)
 
* [Decay  by Building Blocks](#decay--by-building-blocks) The decay of the different building blocks (RNA-genome, proteins and envelope).
 
* Many [references are summarized](#references) and the results are compiled into a table [Viability Data](./virion_viability/notes_on_viability_data.md) (separate page).

### What's done and added here
* Summary of knowledge about the virion viability in different situations and decay mechanisms. //at the moment parts of this page are rather an unordered collection than a concise summary
* The decay situation and the decay mechanisms are associated to each other, some are rarely or not mentioned in literature. E.g. the decay in dry air is associated to RNA self decay. These associations are explorative.
* While old and new research show that the decay in ambient air is U-shaped respect to humidity ([Decay in Ambient Air](#viability-in-ambient-air): low at in dry air, high in intermediate, then again lower in humid air). It is added and emphasized here that at very high humidities (above 90%) the decay fastens. Likely due to [condensation](#evaporation-and-condensation) since the same is true in distilled water. 

### Relevance
* The knowledge of virion viability help to design treatment methods. Such treatments are promising for viruses infecting [apical sides of epithelial tissues](../2_biological/coronavirus.md#apical-side-tropism) since these are often reachable from the outside. Among epithelial infections respiratory infections are suitable since the pathogens often spread through the respiratory tract and not through tissues or through the blood.
* Risk assessment
  * The long survival of virions in cool environments without sunlight indicates a transmission risk in stairwell or garages/parkings of large buildings ([Precaution measures in Large Buildings](../7_social/controlling.md#large-buildings)). 
  * The fast inactivation in sunlight is one reason [outdoors is safer](../7_social/controlling.md#outdoors-is-safer), especially on sunny days.


<!--
### Recommended Literature
[in work]
* Literature how the humidity affects the virion decay:
* [Marr et al](#marr) describe illustrative how the shrinking and growing of droplets affect the stability of influenza virions in their article "Mechanistic insights into the effect of humidity on airborne influenza virus survival, transmission and incidence"
* [Morris et al](#morris)
* Literature on decay mechanisms:
  * Literature on RNA decay
  * Literature on Protein decay
-->



## Measuring and Modelling the Viability of Virions

### Measuring Infectious Virions
To measure infectious viruses cell culture experiments are necessary. The methods detecting building blocks of viruses (PCR and antigen tests) yield positive if the parts of the building are present regardless whether the virions are intact and infectious (page [diagnosis and viral load](../3_medical/diagnosis_and_viral_load.md)).

### Modelling the Viability
When each member of a collection has some time independent chance to replicate or decay during a certain time-span independent of the other members, the whole collection growths or decays exponentially. Examples:
* The decay of radioactive material is exponential since each atom has some probability to decay during a fixed time span.
* Change of prevalence of a disease in a homogenous or at least time homogenous population (time homogenous is approximately true for SARS-2 strains at low numbers of infected throughout the population structure/groups).

In most circumstances virions decay independently of each other with a fixed probability during a given time span. In these situations the virion decay is exponential.

`N(t) = e^(-k*t) * N(0)`  where N(t) = viability count at time t; k = decay rate; N(0) initial viability i.e. at time 0

Common measures for the rate of an exponential decay are:
> Halflife time == log2 reduction time == half of the collection is intact == time to get a 50 % reduction

> Tenth-life time == log10 reduction time == a tenth of the collection is intact == time to get a 90% reduction

The following equations hold (by properties of the exp and the log functions):
* 90%-reduction time = log2(10) * halflifetime
* k = ln(2) / halflifetime




## Viability Observations


### Viability in Sunlight
The UVB part in sunlight is absorbed by DNA/RNA and can cause decay.
The halflife time of UV light depends on the light intensity. 

Intensity UVB (W/m^2)| Situation | Halflifetime in Minutes
--|--|--
1.5 - 2 | Summer Sun at 40 N | 2 - 4.5 
.7 - 1  | Autumn Sun at 40 N | 5 - 6 
0.3     | Winter Sun at 40 N | 15

Remark:
The matrix the virions are eluted is a modifying factor: [Schuit et al](#summary-schuit) observe that the decay in simulated saliva is near double as fast as in cell culture medium.

Sources:
* [Schuit](#summary-schuit)
* [Ratnesar-Shumate](#summary-ratnesar-shumate)


### Decay upon Exposure to Disinfectants
[in work]
The log10 reduction times are below a minute for commonly used disinfectants.

Sources:
* [Chan20](#summary-chan-20)
* [Chin](#chin)


### Viability in Ambient Air
In ambient air exhaled particles change their size due to evaporation and condensation, which changes the environment enclosed virions are exposed to. 
Evidence and explanation are provided, that the decay rates are highest in intermediate and extremely high humidities and low in dry air.

#### Observations and Interpretation
The following pattern of decay rates is observed:

1. __Low Humidities (below the efflorescence humidity about 30% - 40%):__ The decay rate is lowest in very dry settings since the samples dry out (salts and proteins crystallize which is called efflorescence) => no chemical reactions =>spike and envelope decay reduced) => decay mainly through [RNA self decay](#rna-self-decay). 
2. __Intermediate Humidity (about 40-60%):__ The decay rate is highest in intermediate humidities (between 40 - 60%) above the efflorescent humidity: The droplets shrink, so that the [concentrations of physiological biochemicals](#concentration-changes) increase but the substances don't crystallize. => high spike and envelope loss of functionality through interactions with biochemicals.
3. __High Humidity (about 80-90%):__ The decay rate is lower than at intermediate humidities but higher than at very low humidities since the concentration of biochemicals is lower than at intermediate humidities but chemicals reaction take place and so higher than at dry settings.
4. __Very High Humidity (above 90%):__ The decay rate increases. Likely because the particles starts to growth due to condensation which has the same effect as adding distilled water. Unlike influenza viruses, coronaviruses have an increased decay rate in distilled water [citations coming].

Sources: 
* (1) - (3) are described and observed by [Morris et al](#summary-morris)
* (1) - (3) are observed by[Casanova et al](#summary-casanova) and [Cox et al](#summary-cox).
* (4) is observed by [Chan et al, 2011](#summary-chan-11), [Cox et al](#summary-cox).


Course estimates decay halflifetimes for different humidity combinations summarized:

Temperature\Humidity|20| 50 | 80 | 95
--|--|--|--|--
 5| 100 - 300 | 40 - 50   | 60 - 80 | 60 - 70
20|10 - 100   | 4 - 40    | 10 - 20 | 8 - 15
30| 3 - 25    | 1.5 - 10  | 2.5 - 10| 2 - 5
40| 2- 8      | .5 - 2    | 0.5 - 4 | 0.5 - 2.5

The estimates are based on the experiments:
* [Riddell](#summary-riddell): Temperatures (20,30,40), Humidities (50%)
* [Morris](#summary-morris): Temperatures (10,22,27), Humidities (40%, 65%, 80%)
* [Casanova](#casanova): Temperatures (4,20,40), Humidities (20%, 50%, 80%)
* [Chan 11](#summary-chan-11): Temperatures (28,33,38), Humidities (85%, 95%)

which are summarized in the table [Viability Data](./virion_viability/notes_on_viability_data.md).


### Self Decay Situations

> numbers to be checked/confirmed, explorative section

Self decay denotes the decay without inducing decay factors, therefore it is always observed. Extern factors can modify the decay rate by changing the internal state e.g. the environment temperature strongly influences the temperature within a virion. Self decay rate yields a lower bound for the decay at a given temperature.

#### Situations where Self Decay is Important
In praxis self decay occurs: 
* In dry air without UVB light. This is the case in indoor rooms which are not well ventilated and (heated or air-conditioned or the outside air is dry).
* At temperatures above 45 degrees the self decay rate increases steeply. This can be exploited to treat virus infections by local warming of the infected tissues -> [Page Temperature and Humidity Modulation](../6_prevention_and_treatment/temperature_modulation.md). Works especially well coronaviruses, since they live mostly on the [apical sides of epithelial cell layers](../2_biological/coronavirus.md#apical-side-tropism).

#### Mechanisms and Rate
Self decay happens primarily by RNA self decay up to around 45 degrees. Above 45 degrees the proteins start loosing functionality.

The self decay rates are estimated from the settings with the lowest observed decay rates for a given temperature. The lowest rates are observed when the samples are either dried out (at relative humidities below the [efflorescence humidity](#efflorescence-humidity) or in favorable solvents (stabilizing media).

##### Until about 45 degrees: RNA Self Decay
The primary self decay mechanism is RNA self decay. The rate of the RNA decay is similar across different RNA viruses [to check and cite].

The halflifetime halves roughly every 4 to 7 degrees temperature increase:
* at  4 degrees: about 300 - 400 hours
* at 20 degrees: about  80 - 120 hours
* at 35 degrees: about  15 -  20 hours
* at 39 degrees: about   7 -  11 hours
* at 43 degrees: about   3 -   5 hours
* at 45 degrees: about       2.5 hours

##### From about 45 degrees: Protein Decay 
At higher temperatures the proteins start to denature and loose their functionality (usually not reversible). 
* The protein decay is varies across the coronavirus species  and even single strains can adapt to become more heat tolerable ([Laude](#summary-laude)). 
* The halflifetime halves roughly every 2 degrees temperature increase.
  * at 45 degrees: about  80 - 180 hours
  * at 47 degrees: about  40 -  90 hours
  * at 51 degrees: about  10 -  25 minutes
  * at 55 degrees: about   2 -  10 minutes

##### From about 70 degrees: Lipid Envelope and Protein Decay
* at 70 degrees: about 10 seconds (lipid envelope and proteins)

##### Sources
* [Laude](#summary-laude): TGEV coronaviruses are solved in a PH buffer solution.
* [Casanova](#summary-casanova): MHV and TGEV in MEM and at 20% relative humidity.
* summarized in the table [Viability Data](./virion_viability/notes_on_viability_data.md)




## Decay Factors
A virion can decay through by being exposed to a decay factor which directly damage virions (e.g. UV light directly destroys RNA) or a factor can just modify the the decay rate of another mechanism. Often the decay rate depends on an interplay of many factors.


### Introducing Decay Factors

> ##### Decay Factor
> A _decay factor_ denotes (on this page) anything that induces or modifies the decay of virions.

Decay factors can be classified as inducing/modifying and intern/extern:
* _Inducing <-> Modifying_
  A decay factor can induce or just modify a decay mechanism.
  ##### Decay Modifying Factor
  > A modifying factor is a factor which mainly modifies the rate of a decay mechanism.

  ##### Decay Inducing Factor
  > An inducing decay factor is necessary for a certain decay mechanism. An inducing decay factor is the cause of a decay mechanism.

* _Intern <-> Extern_
  The virions decay depends on the internal state and influences from the environment.

  > ##### Intern Decay Factor
  > An internal decay factor is a [property of the virion itself](#virion-property): Its building blocks (the genome, the proteins and the host cell acquired envelope of a virion) and the temperature.

  > ##### Extern Decay Factor
  > [Extern decay factors](#external-decay-factors) Influences from the environment are called external decay factors (e.g. UV light, biochemicals)

* _Factor Induced Decay <-> Self Decay_
Some decay mechanisms occur just in the presence of an decay-inducing extern factor.
> ##### Extern Induced Decay
> Extern induced/extrinsic decay is induced by external factors such as UV light or chemicals. Thus this decay mechanisms only occur if the factors are present.

Life forms always are subject to changes even under optimal conditions. 
Some decay mechanisms depend only on the internal state and no extern factor is necessary.

> ##### Self Decay
> Self decay denotes decay depending only on the [properties of a virion](#virion-properties). The temperature is also a property of a virions, though it is usually determined by the environment temperature.

* Temperature is both an internal state and extern factor i.e. the extern temperature yields the internal temperature.
* Self decay always takes place except at extremely low temperatures. In the presence of extern decay inducing factors, the self decay is often negligible so just the decay caused by extern factors has to be taken into account.

### Radiation

#### UV Light
[in work]

##### UV Light Decay Mechanism
UV light is absorbed by DNA/RNA the resulting excited state can result in changes of the molecule bindings => [RNA decay](#rna-decay-by-uv-light)


#### Visible Light
No active destruction but some spectra enhance the [self decay](#self-decay-rates) by increasing the vibrations of the RNA backbone [to check and cite].


### Chemicals and Biochemicals
[in work]
Extern biochemicals act on the spike and the envelope. Biochemicals entering the virion can act on intern or extern components.

#### Disinfectants
Disinfectants such as alcohol, iodine, hydrogen-peroxide... usually induce very fast inactivation since disinfectants are chosen/constructed/evolved to reduce the viability of life forms. 

* Some react with the proteins, some destroy the RNA and some the lipid envelope. 
* Some enter the virions and some act on the envelope and the spikes.

#### Surfactants
Disintegrate the envelope which can directly destroy virions or make them more susceptible to other [chemicals](#chemicals-and-biochemicals).

##### Soap and Detergents
Soap and detergents mostly destroy the lipid envelope [to check and cite].

#### Immune System Substances
The immune system targets both virions and viruses in the metabolic phase. Here only immune system substances targeting virions are considered.

##### Localized Immune System Substances
These substances are only present in specialized locations (e.g. stomach acid in the stomach, hydrogen peroxide in special cell compartments) and are toxic. These biochemicals usually reduce the viability fast.
Examples:
* _Hydrogen Peroxide_: Denatures Proteins, RNA; -> [Disinfectants](#disinfectants).
* _Stomach Acid_: Fast disintegration of coronaviruses. -> [ph-Values](#ph-values).
* _Digestive enzymes_ from other organisms e.g. bacteria in water (sea, oceans, rivers). -> [Surfactants](#surfactants).

##### Secreted Immune System Biochemicals
These substances are present in body fluids even without infection. Substances are not or very low toxic to the producing form of life but target microbes quite broadly. The toxicity towards coronaviruses usually is concentration dependent and often rather low.
Examples:
* _Lysozyme_ destroys the lipid envelope.

##### Systemic Immune System Substances
These are substances in the blood so they should *not* be cytotoxic and usually are produced on demand and have selective targeting. 
Examples:
* _Neutralizing antibodies_ bind to the spike proteins and render them unusable.

#### Physiological Substances
* _Proteins_  can interact with the spike protein and induce conformation changes whereby the spikes loose the ability to induce cell fusion (no enzymatic functions regarding virions is required). Proteins also can have a protective effect.

#### Salts
[in work]
* Salts can reduce or enhance the decay depending on the situation. 
* Change the [osmotic pressure](#osmotic-pressure) in the environment.

#### PH Values
[in work]
pH values alter the state of biochemicals and the virions. These effects in turn change the decay rates (e.g. shown in [Laude](#summary-laude)).


### Concentration Changes
Concentration changes in the environment can alter the decay rate. Concentration changes can e.g. result from condensation or evaporation.

#### Concentration Increase
Increased concentrations usually increase the decay through [chemicals and biochemicals](#chemicals-and-biochemicals). E.g. in experiment simulating exhaled respiratory droplets, the fastest decay is observed just before the droplets dry out (which is around a relative humidity of 30 to 40%) since the concentration of the chemicals peaks (Section [Decay in ambient Air](#decay-rates-in-ambient-air-at-different-humidities)).

#### Concentration Decrease
Very low concentrations of minerals and proteins ( distilled water or in condensation situations) result in an increased decay rate. Possible effects of a low levels of biochemicals in the water:
- [Osmotic Pressure](#osmotic-pressure)
- Influence the [internal properties](#virion-properties): Osmosis yields more water inside virions, which possibly increases the [RNA self decay](#rna-self-decay) by increasing the degrees of freedom the RNA has to move.


### Osmotic Pressure
[to check/confirm, explorative section]
Different concentrations on the two sides of a semipermeable membrane induce osmotic forces on the membrane, especially since virions don't have ion pumps.


### Temperature

The temperature is a measure for the average kinetic energy of the atoms a substance consists of. Temperature changes have enabling effects on mechanisms (enable a certain mechanism) or modifying effects (change the speed of a mechanism).

#### Effects of Temperature
1. Higher temperatures enable and increase the probability of reactions upon collision due to higher kinetic energies of the atoms.
  => higher temperature increase the speed of nearly all decay mechanisms and for some decay mechanisms high temperatures are needed that they occur (with a relevant probability). 
2. Higher temperatures increase the number of collisions (faster movement).
  => higher temperatures increase the speed of decay mechanisms requiring collisions e.g. [Biochemicals](#biochemicals).
3. Temperature influences the rates of [evaporation and condensation](#evaporation-and-condensation) at air-liquid interfaces.
  => Evaporation shrinks droplet and can increase the concentration of biochemicals or dry them out. Condensation growths droplets and reduce the concentration of biochemicals, which can induce [osmotic pressures](#osmotic-pressure).
4. Large molecules oscillate more at higher temperatures. This increases the chances for decay of large molecules which drive the [self decay](#self-decay) of virions.


### Virion Properties
Besides external factors also the internal properties of a virion influence its probability to decay.

> ##### Virion Property
> A *virion property denotes a physical and chemical characterization of a virion. 

The virion properties can be constant or vary both for strains or throughout lifetime:
* #### Constant for a Strain
  Mostly constant for virions belonging to a strain and throughout the lifespan: Virus produced [Building Blocks](#virion-building-blocks) (RNA genome, the structure of the proteins). However RNA viruses mutate fast, just a few generations can be enough to adapt e.g. to heat ([Laude](#summary-laude)).
* #### Constant throughout Lifetime
  Mostly constant throughout the lifespan of a virions: host-cell acquired building blocks(envelope), other host acquired substances such as fatty acids or salts and sometimes the number and the glycosylation of proteins. E.g. [Fleming and Beeson](#summary-fleming) show that the decay rate depends on the originating host cell.
* #### Variable throughout Lifetime
  Variable throughout the virion lifespan
  - internal temperature (which is mostly the same as the external temperature since virions are very small and not isolated. However in the air virions can absorb sunlight and have a temporarily increased temperature.)
  - internal pH value
  - biochemicals able to pass the envelope




## Theoretical Principles and Decay Mechanisms

> **in work**, in raw form and to be checked

At the molecular level the decay mechanisms are the similar for all life forms since the fundamental build blocks - organic molecules - are common.

### Mechanism of Radiation
* Effects of high energy radiation can change molecule bonds.
* Increase the molecular movement.

### Mechanism of Chemicals and Biochemicals
* Aggressive biochemicals can interfere with the electrons and cause rearrangement of the bindings i.e. a chemical reaction.
* Biochemicals can cause structural changes in organic molecules.
* Biochemicals can stick to the virions e.g. antibodies do so. With molecules adhesion on the outside the virions are 'dirty' and can loose viability.

### Mechanism of Temperature
At the molecular level everything moves and jitters around. The average kinetic energy of this movement and jittering is the temperature.
* The jittering and movement can cause strains on the bindings (mostly intramolecular bonds).
* Movement causes bumps. 
  * Bumps can cause an excited states of molecules enabling chemical reactions.
  * Without within reach substances can't react. The higher the movement the more bumps between molecules which can yield to reactions.





## Decay  by Building Blocks

> **in work** and **explorative**

All of the building blocks of a virions are subject to decay. Under which circumstances the different building blocks decay is discussed in the following.


> ##### Virion Building Blocks
> Coronavirus virions are composed of three classes of building blocks: 
> * RNA Genome (single stranded) 
> * Proteins (N, M, E, S)
> * Lipid envelope (host cell acquired). 
> 
> From the outside well accessible is only the lipid envelope and the spikes protein.


### RNA Stability
The genome of coronaviruses is stored in single stranded RNA, which is the least stable of the 4 [storage forms](../2_biological/life-forms.md#lifetime-storage). 
The primary decay mechanisms of the RNA are UV light and temperature dependent self decay. 

* #### RNA Decay by UV Light
  UV light can cause structural changes in the RNA
  Required Factor: UV Light

* #### RNA Self Decay

  ##### Modifying Factors RNA Self Decay
  * Temperature: The decay rate increases with the temperature (linear in Arrhenius plots).
  * Visible Light ([Summary Fleming](#summary-fleming)): Seems to increase the self decay
  * Matrix the viruses are suspended in: 
    * [Fleming and Beeson](#summary-fleming) found that the more the CS,199 medium was diluted, the faster the decay. The rate change respect to temperature remained constant, indicating that the mechanism didn't change, just occurred more frequently in higher dilutions at the same temperature. 
    * In solutions with very low concentrations e.g. distilled water and increased decay is observed:
      * In air humidities above 95% an increased decay is observed [Decay in Ambient Air](#viability-in-ambient-air).
      * An increased decay in distilled water is observed in-->

  ##### Situations
  RNA self decay is the main decay mechanisms at temperatures below 40 degrees in absence of faster decay mechanisms such interacting biochemicals (which is the case when dried) or light. 
  
  ##### Note
  The rate is similar for all single stranded RNA viruses [citations and argumentation in work]. Some comments are in papers of [Fleming](#summary-fleming) and [Laude](#summary-laude)).




### Protein Decay
Coronavirus virions have the proteins N = nucleocapsid protein, M = membrane protein, E = envelope protein and S = spike protein (some e.g. bovine coronaviruses additionally HE protein). 
* The S protein is most exposed and most unstable. => S most prone to decay.
* The N protein is not energy minimized thus at increased temperatures self decay occurs.
* The M and E protein are generally more stable than the S and N proteins



#### Spike Decay
The spike proteins (and HE for coronaviruses where it is present) is most susceptible to loosing function since a) The spikes point out from the envelope and thus are exposed.
b) The spikes are not in an energy minimized conformation since since they are spring loaded to initiate cell fusion. The tension makes them delicate and without metabolism once released the spike can't go back to the spring loaded state.
    
* ##### Spike Self Decay
  The spike protein of coronaviruses is temperature sensitive due to the spring loaded energy. Above 45 degree the spike can loose its structure e.g. by the transformation from pre- to post-fusion state.

* ##### Spike Decay by Biochemicals 
  Biochemicals can induce direct changes or accelerate other mechanisms. 
  * Proteins
    * Can bind and block functional groups such as cleavage sites or the RBD (e.g. neutralizing antibodies do so)
    * Induce conformational changes e.g. induce the transformation from pre- to post-fusion state. The spikes evolved do so if they are attached to an infectable cell, however they can be 'mistaken'.
  * Neutralizing antibodies can bind to the spikes.

#### Nucleocapsid Decay
The N protein is only inside the virions and thus protected by the envelope and therefore less exposed to biochemicals.

* ##### N Protein Self Decay
  The N protein is conformation is not energy minimized and high temperatures induce irreversible conformation changes [to confirm and cite].

#### E,M Decay
The E an M proteins are more stable than the spikes and the N protein [to confirm and cite]. 


### Lipid Envelope Decay
The lipid envelope is exposed to biochemicals. Since the lipid envelope is host cell acquired its stability can vary.

* ##### Envelope Self Decay
  The lipid envelope looses stability and becomes more permeable at temperatures above 65 degrees [to check and cite].
* ##### Biochemicals
  Substance solving lipids can lyse the lipid envelope.
* Osmotic Pressure: can explode the envelope [to confirm and cite]
* Biochemicals: 





## References
[**in work**]
### References Temperature Viability SARS-2
Many of the results/data are compiled into a table: [Viability Data](./virion_viability/notes_on_viability_data.md).

#### Guo
**Study on the decay characteristics and transmission risk of respiratory viruses on the surface of objects**


#### Summary Casanova
Casanova, L.M., Jeon, S., Rutala, W.A., Weber, D.J., Sobsey, M.D., 2010. 
**Effects of air temperature and relative humidity on coronavirus survival on surfaces.** 
Appl. Environ. Microbiol. 76 (9), 2712–2717.

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



#### Summary Chan 11
K. H. Chan, J. S. Malik Peiris, S. Y. Lam, L. L. M. Poon, K. Y. Yuen, and W. H. Seto
**The Effects of Temperature and Relative Humidity on the Viability of the SARS Coronavirus**
Hindawi Publishing Corporation
Advances in Virology
Volume 2011, Article ID 734690, 7 pages
https://doi.org/10.1155/2011/734690   

##### Methods
The viability of SARS-CoV-1 is determined for the following conditions: 
* in solution and at dried at 40-50% humidity at room temperature.
* dried virions at temperatures (28,33,38) and humidities (80-85%, 95%).

##### Results
"The dried virus on smooth surfaces retained its viability for over 5 days at temperatures of 22–25◦C and relative humidity of 40–50%, that is, typical air-conditioned environments. However, virus viability was rapidly lost (>3 log10) at higher temperatures and higher relative humidity (e.g., 38◦C, and relative humidity of >95%)."

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

  

#### Summary Chan 20
**Factors affecting stability and infectivity of SARS-CoV-2**

##### Methods Summary
"The residual virus in dried form or in solution was titrated on to Vero E6 cells on days 0, 1, 3, 5 and 7 after incubation at different temperatures. Viral viability was determined after treatment with various disinfectants and pH solutions at room temperature (20-25 C)."

##### Results
"When the virus was added to 90% FBS or MEM and was heated at 56C for 30 min, viability in both FBS and MEM was reduced by at least 3 logs (3.58, 0.29)."

##### Methods Details
* Cells and Cell Medium: "Vero E6 cell line was cultured in minimal essential medium (MEM, Gibco, Gaithersburg, MD, USA) with 10% fetal bovine serum (FBS, Gibco), penicillin and streptomycin (Gibco)."
* Virus Strains: SARS-CoV-2 HKU-001a and SARS-CoV HKU39849
* Virion Preparation and Medium: "Virus propagated in Vero E6 cells was maintained in MEM with 1% FBS, and was stored at -80C until use."
* Experiments: 
  * Effect of drying and heat
    * "Ten microlitres of virus (SARS-CoV-2, 106.5 TCID50/mL; SARS- CoV, 107 TCID50/mL) was placed on a glass slide within a shell vial, kept at room temperature (20 - 25 C and relative humidity of 63%) and allowed to dry in accordance with the authors’ previous study with slight modifications [6]." // previous study is [Chan 11](#summary-chan-11)
    * "One hundred microlitres of MEM were used to resuspend the virus for 0, 1, 3, 5 and 7 days after incubation at different temperatures: refrigerator (4oC), room temperature (25 C) and two incubators with different temperatures (33 C and 37C)."
    * "Controls were viruses in solution, and stored in closed screw cap tubes with similar treatment."
  * Stability in disinfectants
    "Thirty microlitres of SARS-CoV-2 (106.5 TCID /mL) and 270 50 mL of various disinfectants were mixed and incubated at room temperature (Table I)."


#### Summary Riddell
**The effect of temperature on persistence of SARS-CoV-2 on common surfaces**

##### Methods
"This study measured the survival rates of infectious SARS-CoV-2, suspended in a standard ASTM E2197 matrix, on several common surface types. All experiments were carried out in the dark, to negate any effects of UV light. Inoculated surfaces were incubated at 20 °C, 30 °C and 40 °C and sampled at various time points."

##### Results
"We obtained half lives of between 1.7 and 2.7 days at 20 °C, reducing to a few hours when temperature was elevated to 40 °C."

##### Methods Details
* Virus Strain: SARS-CoV-2 (Betacoronavirus/Australia/ SA01/2020)
* Virus Culture: "The virus was passaged four times through Vero E6 cells (ATCC CRL- 1586) in Dulbecco’s Modified Eagle Medium (DMEM) supplemented with Penicillin, Streptomycin, Fungizone and 10% fetal calf serum and pelleted via ultracentrifugation at 100,000×g for 90 min."
* Material/Surface Preparation: "All surfaces were prepared by cutting into approx. 1–1.5 cm2 coupons, non-porous surfaces were disinfected prior to use by washing in a mild detergent (Beck- man 555), rinsing in distilled water and then immersing in 80% v/v ethanol. Paper bank notes (in very good condition) were heated in a dry oven to 75 °C for 1 h to reduce bacterial/viral contamination. The 100% cotton cloth was steam sterilised prior to use."
* Experiments Settings:
  * Preparation, Matrix: "Stock virus was diluted in a defined organic matrix, consisting of bovine serum albumin (BSA), mucin and tryptone, following international standard ASTM E2197 [15], designed to mimic the composition of body secretions. Briefly, 360 μL of virus stock was added to 160 μL of a solution consisting of 2.5 mg/mL BSA, 3.5 mg/mL tryptone and 0.8 mg/mL mucin. Ten microlitres of the resulting suspension (final concentration of 3.38×105/10 μL) was inoculated onto the centre of the coupon and allowed to dry in a BSCII for 1 h."
  * "Once dry, the coupons were placed into a humidified climate chamber (Memmert HPP110) for specified time points. Samples were incubated in the dark to limit any effect light might have on viral decay. A single humidity set point (50% relative humidity) was maintained for each of three separate temperature experiments (20 °C, 30 °C, 40 °C)."
* Virion Recovery: "For non-porous surfaces, for each replicate, virus was eluted in 2×115 μL volumes of DMEM with repeated pipetting then titrated individually, in quadruplicate wells on a 96-well plate. For recovery from cotton cloth, inoculated swatches of the cloth were individually submersed in 500 μL DMEM and pipetted repeatedly for at least 1 min before 230 μL of the recovered eluent from each swatch was titrated separately,5 in quadruplicate."
* Measuring Survival: "The virus was resuspended in phosphate buffered saline (PBS) with 1% bovine serum albumin (BSA) and stored at − 80 °C. The virus stock was titrated on Vero E6 cells and the TCID 50 was determined to be 4.97×107/mL by the Spearman–Karber method [12, 13]."


#### Chin 
Chin, A.W.H., Chu, J.T.S., Perera, M.R.A., Hui, K.P.Y., Yen, H.-L., Chan, M.C.W., Peiris, M., Poon, L.L.M., 2020. 
**Stability of SARS-CoV-2 in different environmental conditions.** 
The Lancet Microbe 1 (1).

#### Summary Morris
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
* The evaporation kinetics of droplets are shown in 'Extended Data Fig. 1': the drier and warmer the air the faster the initial evaporation.
##### Meta-analysis
* Table summarizing several coronavirus viability studies (halflifetimes given).
* "To test the validity of our model beyond the measured environmental conditions (i.e., beyond 10– 27 C and 40–85 % RH), we compiled data from 11 published studies on human coronaviruses, including SARS-CoV-2, SARS-CoV-1, MERS-CoV, HCoV-OC43 and HCoV-299E, under 17 temperature-RH conditions. We generated estimates of half-life and uncertainties (Extended Data Table 2) and compared those estimates to the half-lives predicted by the mechanistic model parametrized from our SARS-CoV-2 data."
##### Discussion
* "Our results highlight scenarios of particular transmission risk, and provide a mechanistic explanation for observed superspreading events in cool indoor environments such as food processing plants."
* "Moreover, our model predicts observations from other human coronaviruses and other studies of SARS-CoV-2, suggesting the existence of shared mechanisms that determine environmental stability across a number of enveloped viruses."



#### Summary Laude
**Thermal Inactivation Studies of a Coronavirus, Transmissible Gastroenteritis Virus**

> Partly inspired by [Fleming](#summary-fleming) where the decay of the Semliki Forest Virus is investigated. Laude and investigate the decay of TGEV and confirm/reach groundbreaking findings: Showing a that two different decay rate increases below respectively above 40 to 45 degrees celsius. It is demonstrated that TGEV can evolve to increase the survival at higher temperatures (55 degrees), but not at lower temperatures (38).

##### Methods
* The decay rate of the TGEV coronavirus at temperatures between 31 and 55 degrees with 4 degree steps at the pH values 7 and 8 is determined.
* 4 respectively 8 rounds of survivor selection were carried out at 38 and 54 degrees.
##### Results
1. _Inactivation of infectivity_
   * "An exponential decrease of infectivity, without an initial shoulder, could be observed between 31 and 51 °C. Thus, the inactivation proceeded as a first-order reaction, implying that the virus preparations were homogeneous." // Figure 1 a and b
   * "At a higher temperature (55 °C) a two component curve was observed (omitted for clarity), a finding which has been occasionally recognized with some other RNA viruses (see Ginoza, 1968)."
   * "Thermal inactivation of the virus at pH 8 showed that the half-life at any temperature is markedly reduced (Fig. 1 b)."
   * "Thermal inactivation of a coronavirus essentially resembles that observed previously with several other RNA viruses. TGEV thermal inactivation is mediated by two thermodynamically distinct reactions below and above 45 °C."
2. _Selection of thermal-resistant (tr) mutants_
  "Using four independent stocks of mutagenized virus, we failed to select thermal-resistant mutants by survivor selection at 38 °C. In contrast, thermal-resistant mutants were consistently obtained at 54 °C. However, the latter did not show any increased stability at 38 °C, confirming the fact that a different inactivation process takes place at high and at physiological temperatures." // Figure 3
##### Methods Details
* Virus Strain: "Purdue and the D52 strains were used as the source of transmissible gastroenteritis virus (TGEV)"
* Cell and Virus Cultures: "The virus was propagated in the pig kidney cell line RP_D, and maintained in Eagle's minimum essential medium (MEM) containing 2% calf serum; the cultures were frozen at -70 °C at the first signs of c.p.e."
* Sample Preparation and Medium: "Supernatant fluids from infected cultures were thawed and then clarified by low-speed centrifugation before dilution 1:10 in a 50 mM-HEPES solution (Sigma) buffered at pH 7 or 8, and supplemented with antibiotics. For short incubations this solution was preheated before adding the virus. One ml amounts in glass tubes were placed in well-stirred water baths in the dark. Duplicate aliquots were removed at given times and stored at -70 °C until titration of infectivity."

#### Biryukov
Biryukov J, Boydston JA, Dunning RA, Yeager JJ, Wood S, Reese AL, Ferris A, Miller D, Weaver W, Zeitouni NE, Phillips A, Freeburger D, Hooper I, Ratnesar-Shumate S, Yolitz J, Krause M, Williams G, Dawson DG, Herzog A, Dabisch P, Wahl V, Hevey MC, Altamura LA. 2020. **Increasing temperature and relative humidity accelerates inactivation of SARS-CoV- 2 on surfaces.** 
mSphere 5:e00441-20. 
https://doi.org/10.1128/mSphere.00441-20
#### Methods
* "Vero (ATCC CCL-81) cells were used to propagate SARS-CoV-2 and in virus microtitration assays. Cells were cultured at 37°C and 5% CO2 in complete growth medium (gMEM) as previously described (16)."
* Experiment: 
  * "Virus stability was measured using multiple RH and temperature combinations ranging from approximately 20 to 80% RH and 24 to 35°C." 


### References Temperature Viability of other Viruses

#### Summary Cox
**Inactivation Kinetics of Some Microorganisms Subjected to a Variety of Stresses**
##### Methods
"Loss of viability in aerosols of Escherichia coli B, E. coli commune, E. coli Jepp(in nitrogen atmospheres),and Semliki forest virus(in air) was determined as a function of relative humidity at 26.5 C."
##### Methods Details
Escherichia coli:
* For the coli bacteria B and Jepp the humidities 40, 86 and 94 % were accessed.
* For the coli bacteria commune the humidities 40, 80 and 90 % were accessed.
Semliki forest virus:
* Matrix: medium 199 + 10%
* Humidities: 30, 40, 50, 60, 70, 80, 85, 90%
##### Results
* The coli bacteria survived best at 40% humidity (Figure 1,2,3). The survival was slightly greater at 90/94% than at 80/86% (Figures 1,2,3).
* The semliki forest virus survived best at 30% humidity. The viability was low between 40% - 60%, it started to increase around 70% to reach a local maximum (lower than at 30%) at 85%. The viability at 90% was slightly lower than at 80%. 

#### Summary DiGoia
**Thermal Inactivation of Newcastle Disease Virus**
##### Methods
"The rate of destruction of hemagglutinins and infectivity of Newcastle disease virus was determined over a temperature range of 37.8 to 60C."
##### Results
"From the calculated values of delta H and delta S,it was concluded that inactivation of the hemagglutinating activity and viral infectivity was due to protein denaturation."

#### Summary Fleming
**Thermal Inactivation of Semliki Forest Virus**

> Recommended to read [Laude](#summary-laude) as follow up.

##### Methods
* First the influence of the originating cells and the surrounding matrix was determined to select a appropriate model for the thermal inactivation studies.
* The inactivation of homogenous virions at temperatures between 2o° and 50° degrees in different dilution of stabilizing medium was determined.
##### Results
* Influence of originating cells:
  * At 35°, the rate of inactivation was independent of the originating cell lines (Figure 2 a).
  * At 50°, only virions originating from a stable cell line (mouse embryo cells) showed a 1 step log-linear inactivation. For other cells lines a 2 step log-linear inactivation is observed (Figure 2 b).
  > Stable cell line means likely a homogenous cell line. In a homogenous cell line, the virions have the same lipid envelope unlike in mixed cell lines where each cell type can yield slightly different appearances of the virions -> [Virion Properties](#virion-properties).

* At 22° the more the stabilizing medium 199, CS was diluted by a phosphate buffer solution, the greater was the loss viability (Figure 1 and 3). The loss of viability was shifted to higher dilutions in the dark (Figure 1).
* The arrhenius plots in Figure 3 and the corresponding values in Table 1 show:
  * There's a switch of the inactivation mechanism between 40 and 45 degrees.
  * The dilution-ratio and the pH value (6.5 vs 7.5) change the decay rate but leave the mechanisms unchanged.
* The decay at 50° (but not the decay at 35° or by UV radiation) induces a reduced neutralization by antibodies, which indicates changes of the surface proteins. However since the neutralizing tests were done by an excess of antibodies which makes the neutralization independent of the virus concentration, this change was faster than the reduction of viability.


### References Droplets and Influenza

#### Marr
Marr LC, Tang JW, Van Mullekom J, Lakdawala SS. 2019 
**Mechanistic insights into the effect of humidity on airborne influenza virus survival, transmission and incidence.** 
J. R. Soc. Interface 16: 20180298. https://dx.doi.org/10.1098/rsif.2018.0298



### References UV
#### Summary Schuit
**Airborne SARS-CoV-2 Is Rapidly Inactivated by Simulated Sunlight**
[in work]

> Remark: similar and same research group as [Ratnesar-Shumate](#summary-ratnesar-shumate)
##### Methods
"This study examined effect of simulated sunlight, relative humidity, and suspension matrix on stability of SARS-CoV-2 in aerosols."
##### Results
* "Mean decay rates (± SD) in simulated saliva, under simulated sunlight levels representative of late winter/early fall and summer were 0.121 ± 0.017 min−1 (90% loss, 19 minutes) and 0.306 ± 0.097 min−1 (90% loss, 8 minutes), respectively."
* At high intensity light and high humidity the decay was faster in saliva than in culture medium.
##### Methods Details
* Culturing: "Vero Cells (ATCC CCL-81) were grown at 37°C and 5% CO2 in culture medium, consisting of minimum essential medium (Gibco) supplemented with 10% heat-inactivated fetal bovine serum (Hyclone or Atlanta Biologicals), 2 mM GlutaMAX (Gibco), 0.1 mM nonessential amino acids solution (Gibco), 1 mM sodium pyruvate (Gibco), and 1% antibiotic-antimycotic solution (Gibco)."
* Matrix: "For aerosol tests, aliquots of the concentrated virus were thawed and diluted 1:10 in either fresh culture medium or simulated saliva, formulated as described in the ASTM standard for measuring virus decontamination efficacy [25], but prepared with KH2PO4 and K2HPO4 at final concentrations of 15.4 mM and 24.6 mM, respectively. "
* Experiments:
  * "Tests were conducted in both suspension matrices across a range of relative humidity levels (20%, 45%, and 70%) and simulated sunlight intensities (darkness, midintensity, and high intensity)."



#### Summary Ratnesar-Shumate
**Simulated Sunlight Rapidly Inactivates SARS-CoV-2 on Surfaces**
[in work]

> Remark: similar and same research group as [Schuit](#summary-schuit)
##### Methods
"In the present study, simulated sunlight rapidly inactivated SARS-CoV-2 suspended in either simulated saliva or culture media and dried on stainless steel coupons."
##### Results
* "Ninety percent of infectious virus was inactivated every 6.8 minutes in simulated saliva and every 14.3 minutes in culture media when exposed to simulated sunlight representative of the summer solstice at 40°N latitude at sea level on a clear day. Significant inactivation also occurred, albeit at a slower rate, under lower simulated sunlight levels."
* Inactivation is about 2 times faster in saliva compared to culture medium.
##### Methods Details
* Cell Cultures: "Vero cells (ATCC CCL-81) were cultured at 37°C and under 5% CO2 in complete growth medium (gMEM) consisting of minimum essential medium (Life Technologies) supplemented with 10% v/v heat-inactivated fetal bovine serum (Sigma Aldrich), 2 mM Glutamax (Life Technologies), 0.1 mM nonessential amino acids (Life Technologies), 1 mM sodium pyruvate (Life Technologies), and 1% v/v antibiotic-antimycotic solution (Life Technologies)."
* Virion Harvesting: "At 72 hours post infection, the flasks were removed from the incubator, frozen at −80°C for at least 1 hour, thawed at 37°C, and the contents of the flasks clarified by centrifugation at 2000g for 10 minutes at 4°C. The clarified supernatant was concentrated approximately 10-fold using a 100 000 molecular weight cutoff cross flow cassette (VF20P4; Sartorius), then stored at −80°C in 1 mL aliquots until use."
* Experiment:
  * Light: "The light spectrum was designed to represent natural sunlight, specifically in he ultraviolet (UV) range (280–400 nm), and closely matched model spectra from the National Center for Atmospheric Research’s (NCAR) tropospheric ultraviolet and visible (TUV) radiation model in this range [15] (Figure 2)."
  * "The temperature and relative humidity inside the chamber were maintained within a narrow range for testing, specifically 20 ± 4°C and 19 ± 5%, respectively."
  * "For each day of experiments, a frozen aliquot of concentrated virus was thawed and diluted 1:10 into either gMEM or a simulated saliva. The simulated saliva formulation represents a suspension medium that mimics the properties of saliva, specifically tonicity, pH, and protein content, and was similar to previously published recipes [17, 18] with the exceptions of KH2PO4 and K2HPO4, which were present at 15.4 mM and 24.6 mM."
  * Amount: 5-μL droplets



## Appendix

### Efflorescence Humidity
For a particle of a specific substance this is the humidity point/range where the substances (proteins and salts) crystallize out. When crystallized the particles don't anymore move around, different reagents don't match which causes chemical reactions to cease. -> [Efflorescence](../9_physics/aggregations_of_atoms.md#efflorescence) on the page [Aggregation of Atoms](../9_physics/aggregations_of_atoms.md).