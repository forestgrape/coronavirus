# Spread Analyses
[in work]
* [Introduction](#introduction)
  * [Methods](#methods)
* [Observed Spread Patterns](#observed-spread-patterns)
  * [Cities versus Rural](#cities-versus-rural)
  * [Schools and Children](#schools-and-children)
* [Summarized References](#summarized-references)
  * [Summary Vlachos,Svaleryd](#summary-vlachossvaleryd)
  * [Summary Stein-Zamir](#summary-stein-zamir)
  * [Summary Dattner](#summary-dattner)
  * [Summary Rader,Scarpino](#summary-raderscarpino)
* [References](#references)


## Introduction
A better understanding of the spread of Covid-19 helps to determine the optimal measures.

### Methods
* Analyses are based on 
  1. literature and 
  2. directly analyzing published Covid-19 cases data. 
* The spread observed for Covid-19 is analysed.
* The spread is compared to the observed spread for other diseases. 


## Observed Spread Patterns
[in work]
### Cities versus Rural
* In less densely populated provinces (more rural and smaller cities) the Covid-waves are more steep and shorter i.e. the incidence curve is more peaked compared to the incidence curves in large cities. 
  * Observed by [Rader,Scarpino et al](#summary-raderscarpino).


### Schools and Children
* [Dattner et al](#summary-dattner) observed that children are relative to adults
  * less susceptible 45% [40%, 55%]) 
  * somewhat less infectious 85% [65%, 110%])
* [Vlachos, Hertegard and Svaleryd](#summary-vlachossvaleryd) found that parents children in the 9th school year (open schools)had about the same incidence rate for Covid-19 as parents children in the 10th school year (closed school). If adjusted for factors such as age and occupation the risk was about 15% higher for being diagnosed with Covid-19 when the child went to open schools. // Comment: this indicate that other factors are more important than whether the children go to school. 
* Large high school outbreak in Israel shortly after reopening of the schools. The outbreak was probably due to aerosol super-spreading from teacher(s) which was enable by use air-conditioning [Summary Stein-Zamir](#summary-stein-zamir). 



---

## Summarized References
[in work]
References without a summary are in the section [References](#references). Copy & Paste citation are in "citation". 


### Summary Vlachos,Svaleryd
**School closures and SARS-CoV-2. Evidence from Sweden’s partial school closure**
Jonas Vlachos, Edvin Hertegard, Helena Svaleryd

#### Methods
Remark: Working Paper
* "Swedish upper secondary schools moved to online instruction while lower secondary school remained open. This allows for a comparison of parents and teachers differently exposed to open and closed schools, but otherwise facing similar conditions."
* the incidence rates were adjusted using logistic regression for wage, sex, occupation, educational attainment, income, regions of residence and of origin. OLS was used too. 
#### Results
* Comparison of Covid-19 incidences between parents with children in schools and homeschooling:
  * unadjusted the Covid incidence were near the same 5.67 versus 5.66 (Table 2)
  * adjusted the risk for parents with children in school was about 15% [OR 1.15; CI95 1.03–1.27] higher if adjusted with logistic regression(Table 1)
* "Among lower secondary teachers the infection rate doubled relative to upper secondary teachers [OR 2.01; CI95 1.52–2.67]. This spilled over to the partners of lower secondary teachers who had a higher infection rate than their upper secondary counterparts [OR 1.30; CI95 1.00–1.68]."


### Summary Stein-Zamir
**A large COVID-19 outbreak in a high school 10 days after schools’ reopening, Israel, May 2020.**
Stein-Zamir Chen , Abramson Nitza , Shoob Hanna , Libal Erez , Bitan Menachem , Cardash Tanya , Cayam Refael , Miskin Ian .  Euro Surveill. 2020;25(29):pii=2001352. https://doi.org/10.2807/1560-7917.ES.2020.25.29.2001352
#### Methods
Analyzing a large high school out break in Israel shortly after schools have been reopened. 
#### School Setting
* From 13 March to 17 May Schools in Israel were closed (limited opening for small children on 3 May)
* A heat wave with temperatures up to 40 degree from 19–21 May: 
  * "air-conditioning functioned continuously in all classes."
  * no face-masks
* "crowded classes: 35–38 students per class, class area 39–49 m2, allowing 1.1–1.3 m2 per student"

#### Results
* "Testing of the complete school community revealed 153 students (attack rate: 13.2%) and 25 staff members (attack rate: 16.6%) who were COVID-19 positive."
* "COVID-19 rates were higher in junior grades (7–9) than in high grades (10–12) (Figure 1). The peak rates were observed in the 9th grade (20 cases in one class and 13 cases in two other classes) and the 7th grade (14 cases in one class). Of the cases in teachers, four taught all these four classes, two taught three of the four classes and one taught two of these four classes."
* "Most student cases presented with mild symptoms or were asymptomatic."


### Summary Dattner
**The role of children in the spread of COVID-19: Using household data from Bnei Brak, Israel, to estimate the relative susceptibility and infectivity of children**
Remark: **not** peer-reviewed
#### Methods
* "Data were collected from households in the city of Bnei Brak (City close to Tel Aviv), Israel, in which all household members were tested for COVID-19 using PCR."
* The authors developed a model (discrete stochastic dynamic model) for the propagation of Covid within a household. With this model infectivity and susceptibility for children and adults can be estimated. 
#### Findings
* 44% of adults and 25% of children infected
* infection risk increases with age (except children below 1 year compared to children between 1 and 4)
* For children the susceptibility was 45% [40%, 55%] and the infectivity 85% [65%, 110%] in comparison to adults. 


### Summary Rader,Scarpino
**Crowding and the shape of COVID-19 epidemics**
Rader, B., Scarpino, S.V., Nande, A. et al.
Nat Med (2020). https://doi.org/10.1038/s41591-020-1104-0

#### Goal
Figure out the effect of population densities (crowding), mobility, humidity on the overall and the temporal distribution of Covid-19 incidences. 

#### Methods
The incidence rates of Covid was analysed in China and Italy.
There work consists of two parts: 
1. A spread analysis, using various statistical methods.
     * Regions which published independent Covid cases were considered as units. In China these were provinces [to confirm]. 
     * For each unit the population density is determined.
     * To measure how peaky the incidence curves are, their Shannon entropy is calculated. 
2. The spread was simulated. The simulation was done for different population models and with 


#### Analysis Results
* lower density = sparse (rural areas): 
  * more peaked incidence rates, most of the infections are within 20 days (Figure 1a)
  * lower cumulative incidence (final attack rate)
* high density = crowded (large cities): 
  * less peaked incidence rates, most of the cases are within 40 days (Figure 1a)
  * higher cumulative incidence rates

#### Simulation Results
* lower density = sparse: 
  * intervention measures cause the incidence curve to flatten out and moderately reduce total case count (Figure 3 c and d)
* high density = crowded: 
  * intervention measures are crucial since without interventions prolonged spread with high numbers of infected is predicted (Figure 3 c and d)


## References
References with a summary are in the section [Summarized References](#summarized-references)