# Thoughts on Competition Advantages and Transmissibility
> explorative chapter

* [Summary](#summary)
* [Introduction](#introduction)
* [Hypothesis 1: Immune Escape can result in a Significant Competition Advantage even at low Seroprevalence](#hypothesis-1-immune-escape-can-result-in-a-significant-competition-advantage-even-at-low-seroprevalence)
  * [Model: The Overall R value of a Variant is the Average of the R Values of the Individuals Susceptible to a Variant](#model-the-overall-r-value-of-a-variant-is-the-average-of-the-r-values-of-the-individuals-susceptible-to-a-variant)
  * [Skewed Spreader Distribution](#skewed-spreader-distribution)
  * [Biological Mechanism: How Mutations directly effect Immune Evasion](#biological-mechanism-how-mutations-directly-effect-immune-evasion)
* [Hypothesis 2: Faster Infections Cycle can yield a Competition Advantage](#hypothesis-2-faster-infections-cycle-can-yield-a-competition-advantage)
  * [Spread Advantages by faster Infections](#spread-advantages-by-faster-infections)
  * [Biological Mechanism of faster Priming](#biological-mechanism-of-faster-priming)
* [Evidence for Competition Advantages without Increased Transmissibility](#evidence-for-competition-advantages-without-increased-transmissibility)
  * [Observations indicating No Overall Increased Transmissibility](#observations-indicating-no-overall-increased-transmissibility)
  * [Evidence for Competition Advantages due to Immune Escape](#evidence-for-competition-advantages-due-to-immune-escape)
  * [Evidence for Competition Advantages due to Faster Infections Cycles](#evidence-for-competition-advantages-due-to-faster-infections-cycles)
  * [Why usually only One Variant Succeeds](#why-usually-only-one-variant-succeeds)

## Summary
Since early in the SARS-2 pandemics new variants are observed. Sometimes new variants out compete existing variants. Often the competitive advantage is attributed to a higher transmissibility in the sense of a higher average R value. In the following it is argued that a competitive advantage is not necessarily the result of a higher transmissibility but can also result from immune evasion (even at low seroprevalences) or from faster spread. Faster spread alone makes the waves peakier but not larger.

#### Hypotheses 1
* *Model: Immune Evasion even at low Seroprevalence yields a Competition Advantage*: The Covid spread is highly uneven, in the sense that some individuals have many secondary cases while most individuals have no secondary cases. Thus the distribution of the individual R values is skewed: Many individuals have low R values, while a few have high R values. If a Covid variant now is able to reinfect and spread through people with high R values, it has a competition advantage.
* *Biological Mechanisms:* One way immune escapes arise is through points mutations in antigen epitopes.


#### Hypothesis 2
* *Model: Faster Infection yields a Competition Advantage*: Some variants infect faster which makes their incidence rates peakier. These variants have competitions advantages over slower variants even without a higher transmissibility: The fast variants rush through the most hosts with highest R values and leave only few hosts for slow variants, since reinfection within a couple of weeks is rare.
* *Biological Mechanism:* Mutations affecting the cleavage sites can increase the priming through proteases which yields a shorter virion time which results in faster infections (and also effectiveness of neutralizing antibodies is reduced due to a shorter virion time and thus exposure time).
* *Examples:* Mutation at the residue H681 increase the cleavage rate by furin: P681H in B.1.1.7, P681R in B.1.617

#### Epidemiological Evidences
The hypotheses above explain patterns observed for the spread of new variants: 
* Immune evasion variants are often observed when there's preexisting immunity e.g. the beta variant in northern Brazil.
* Fast strains such as alpha and delta out-compete other variants especially when many new hosts become available i.e. in spread-favorable situation such as the release of measures or spread-friendly climate situations.



## Introduction
Coronaviruses are well known for the ability to cross species borders and adapt to new situations:
* Bovine coronaviruses spread from cattle to many ungulates both domestic and wild.
* In cell cultures coronavirus can adapt within a couple of generations. E.g. 
  * they can adapt such that the virions tolerate high temperature (55 degrees) better [Laude](../2_biological/virion_viability.md#summary-laude).
* SARS-CoV-2 jumps to domestic animals and adapts.

Even when staying within a species, human coronavirus are known to mutate frequently. The new strains replace the existing strains and are able to reinfect.

Regarding SARS-CoV-2, new lineages emerge and often show a competition advantage. The underlying mechanisms for the competition advantages are often unclear. Often from the competition advantage a higher overall R values is presumed. The goal of this chapter is to outline that a competition advantage can have different causes:
* Higher transmissibility in the sense of an overall higher R value
* Immune escape which enables reinfection. Since the individual R value distribution is skewed this can yield a higher spread. (Hypothesis 1)
* * Faster spread and thus outpacing lineages spreading at the same time. (Hypothesis 2)



## Hypothesis 1: Immune Escape can result in a Significant Competition Advantage even at low Seroprevalence

### Model: The Overall R value of a Variant is the Average of the R Values of the Individuals Susceptible to a Variant
The Covid transmission [distribution is skewed](#skewed-spreader-distribution). The skewed spread motivates to define individual R values. The overall R value of a SARS-CoV-2 variant calculates as averaging the individual R values of the persons susceptible to transmit the variant in question. If a variant is able to reinfect individuals with a high R value, it has a competitive advantage over other variants and the observed R value is higher than for a variant which needs to spread through population groups with low R values.

### Skewed Spreader Distribution
Epidemiological and experimental observations show that: A few percent of people infect many others while most infected have no secondary cases as described in the [Transmission Distribution](./spread_analyses.md#transmission-distribution) on the spread analyses page.

### Biological Mechanism: How Mutations directly effect Immune Evasion
Coronaviruses have evolved to escape immune responses and have a variety of mechanisms to evade immune response ([Immune Evasion](../4_immunological/immune_evasion.md)). 
One way is to avoid protein based recognition via non synonymous mutations. By definition non synonymous mutations alter the protein sequence. An altered protein sequence within antibody or T cell epitopes can weaken or break the bindings and which in turn weakens or breaks the associated immune response. 

> Remark: One sort of immune escape mutations are escapes from neutralizing antibodies. Neutralizing antibody escapes are the easiest to discover since infectious virions or pseudo-virions assays can be used. Escapes from neutralizing antibodies are frequently observed in the S1 domain of the spike protein. The immune escape is not necessarily an escape from neutralizing antibodies but can also result from other immune evasion mechanisms e.g. from T cell epitopes or non-neutralizing antibody epitopes. 


## Hypothesis 2: Faster Infections Cycle can yield a Competition Advantage
Coronaviruses can evolve to infect faster i.e. once infected a high viral load builds up faster. The faster infection yields competition advantage when two strains spread in parallel and thus compete for hosts to infects. The faster variant wins since a follow up infection is unlikely due to cross-immunity and alertness of the respiratory tract immune system. Faster spreading is not necessarily associated to higher transmissibility, though faster spreading can yield higher transmissibility in certain situations.

### Spread Advantages by faster Infections
1. *Advantages in Direct Competition*
   * Super spreading situations contribute to the spread of Covid. If in a single super spreading situation a fast and a slow strain super-spread, the fast strain will out-compete the slow variant.
   * Situations where high spreading is possible often are clustered e.g. in times when protection measures are changed. Similar to a single super-spreading event, during short periods of high spread, the faster spreading variant will conquer more ground than a slow spreading variant.
2. *Advantages in Circumventing Precaution Measures*
   * Often some time is needed until discomfort is noticed. A fast strain is more likely to spread ahead of precaution steps such as avoiding crowded indoor spaces.
   * Contact tracing needs some time, which may work less well if the variant infects really fast.
3. *Advantages in Competent Immune Systems*
  Slow infecting coronaviruses such as SARS-1 and MERS take long to build up a high viral load: 
    * which is mostly possible when the immune system is (temporary) reduced
    * at the time of peak infectiousness  usually symptoms are present
  
    All strains of SARS-2 are already faster than SARS-1 and MERS, however there are variations among the SARS-2 strains. Even for people with a good immune system, a fast infecting variant may transmit before immune protections are in place. So when a strain is able to infect fast, an increased spread through immune-competent people is thinkable. Which could mean that the spread becomes more evenly distributed. 

> The effects of 2. can be reduced by information. The effects of 3. by testing. 

> 2. and 3. can yield higher transmissibility i.e. an increase of the average R value. It is also possible that the average R value of faster spreading variants is not higher since faster infecting viruses may yield more localized infections which the immune system can better prevent.


### Biological Mechanism of faster Priming
The spike proteins of coronaviruses need to be [primed](../2_biological/coronavirus.md#virion-priming) in one or several steps until the spikes under go the conformation change to induce membrane fusion. The spikes can mutate such that
* New proteases can prime the spikes (A major difference between SARS-CoV-2 and SARS-CoV-1 is that SARS-2 can be primed by the furin protease i.e. the S1/S2 junction has an insertion of some basic residues, => called polybasic, furin now can cleave this junction).
* Fewer priming steps are required (The D614G mutation in the spike has this effect since the receptor domain is more in the UP state.).
* The existing proteases can better prime (the mutations P681{H,R} of the variants B.1.1.7).



Both have the effect that the spikes are primed faster. A faster spike priming induces a shorter virion phase and a faster cell cell fusion. The shortened virion phase yields faster infection cycles and which in turn can yield a faster increase in viral load.

> The final viral load is not necessarily higher since a faster spike priming usually causes an infections more localized which is easier for the immune system to recognize and to eliminate.

> A broader spike activation can increase the tropism of coronaviruses. An increased tropism can cause different disease patterns which can be more serious.


## Evidence for Competition Advantages without Increased Transmissibility

> **in work and to be checked**

### Observations indicating No Overall Increased Transmissibility
Observations for the spread of new variants: At low prevalence new variants/strains usually spread faster than existing variants (e.g. 20AEU1 or B.1.1.7 out-competed the previous variants). However once a certain level is reached and/or the measures are tightened, the spread of the new variants stabilizes or reduces as for the previous variants/strains.

### Evidence for Competition Advantages due to Immune Escape

#### Observations for SARS-CoV-2
Variants with increased immune escape are observed in regions with high seroprevalences e.g. P1 in tropical Brazil where P1 replaced existing variants. In other parts of the world P1 didn't out-compete existing variants.

#### Observations for other Coronaviruses
Both for the human endemic coronaviruses (HKU1, NL63, OC43 and E229) and coronaviruses of domestic animals (e.g. bovine coronaviruses) it is observed that new strains replace old strains. The new strains which replace the previous strains usually do not yield increased waves or otherwise show higher transmissibility. However the new strains usually escape previously acquired antibodies.

#### Observed for other Respiratory Viruses
Influenza strains vary each season. 

### Evidence for Competition Advantages due to Faster Infections Cycles
#### Observed Spread of the Alpha Strain
Fast strains gain ground quickly in situations where the transmission opportunities increase e.g. through lessening of measures (either by policy or because of lessened adherence): Alpha Variant during December 2020 in England, Ireland; Delta Variant during summer 2021 in Europe and US.


### Why usually only One Variant Succeeds
Follow up reinfections with another variant are rare since:
1. A respiratory disease sets the respiratory immune system into an alert state for this reason usually only one respiratory virus can cause a disease at a time and the alertness of the immune system prevents further virus infections in the coming weeks (this is only true for virus infections and not bacteria or fungal infections since they require different immune responses. It is also not true if the immune system is out of shape).
2. The closer pathogens either genetically or in the way of life the more cross immunity there is.Even between genetically unrelated RNA viruses there is cross immunity since the immune system can detect double stranded RNA which occurs during genome duplication. Different strains of SARS-CoV-2 may have slightly different spikes, but most parts still are very similar enabling the immune system to recognize them as similar.

=> Only the first infecting variant is successful at infecting regardless whether a new SARS-2 variant manages to escape the acquired immunity, it most likely will fail to infect due to alertness.




