# Monitoring

## Content
* [Content](#content)
* [Monitor Evolution](#monitor-evolution)
* [Monitor Prevalence](#monitor-prevalence)
  * [Different Counts](#different-counts)
  * [Motivation to Monitor](#motivation-to-monitor)
  * [Numbers to Monitor](#numbers-to-monitor)
  * [How to Monitor](#how-to-monitor)
  * [Estimating Prevalence](#estimating-prevalence)
* [Testing Schemes for different Situations](#testing-schemes-for-different-situations)
  * [Testing Priorities](#testing-priorities)
  * [Practical Testing Methods](#practical-testing-methods)
* [From Numbers to Measures](#from-numbers-to-measures)
* [Data](#data)
  * [Distributed Handling](#distributed-handling)
  * [Data Specifications](#data-specifications)


## Monitor Evolution
[in work]
From time to time full genome samples should be analyzed to monitor the evolution of Sars-CoV-2 and to deduce the international spread (e.g. done by [Hodcroft et al](../5_epidemiological/spread_analyses.md#summary-hodcroft)). Dense sampling even helps to reconstruct the local spread (e.g. done by [Brueningk et al](../5_epidemiological/spread_analyses.md#summary-brueningk)).



## Monitor Prevalence
To adjust the measures and to communicate these, it is important to estimate and monitor different incidence rates.

### Different Counts
There are several counts to distinguish [not very clear on this page yet, in work]:
* Number of people getting currently infected. This number predicts how many people may need hospital treatment starting in roughly 1 to 3 weeks and being there in 1 to 4 weeks so they may need a place in the next 1 to 7 weeks. This number can only be **estimated**. The numbers depends on the protection measures and the count of currently infected (mostly those not knowing).
* Number of people with viruses detectable with PCR/Antigen tests. They may not yet be symptomatic but may get **tested** through sampling or contact tracing. They may or may not develop symptoms.
* Number of people with **symptoms**. Symptoms usually come between 1 and 10 days after the infection occurred.
* Number of people admitted to **hospitals**. (This number can be lowered in absolute emergencies with triage.)
* End of disease. Often about 10 days after symptom onset for a mild disease. The disease lasts usually much longer in severe cases and is fatal in about [1 of 400 cases](#on-numbers) which yields the **death count**.

### Motivation to Monitor
* Determine control which control measures are optimal and/or needed depends on incidence rates. If the incidence rate is out of some bounds the measures may fail to work or be unnecessary strict: 
  * Controlling methods relying on contact tracing need low incidence rates and detecting most cases with monitoring. To rely on contact tracing detection rate should be at least 75%. Still useful if lower but one shouldn't rely on it.   
  * Many controlling methods rely on methods reducing the infection probability but not preventing it (e.g. distancing, intermediate filtration face masks), that only works if there are not to many infected.
  * Shutting down businesses (badly ventilated offices and fabrics are the fare bigger risk than schools or outdoor gastronomy) may not be adequate at an incidence rate of 0.1% of currently infected, adequate to close targeted at 1% and all possible indoor settings at 10%.
* Planning in hospitals: Knowing the current incidence rates gives an estimate for the capacity needed in a few weeks.
* Communication: Knowing the cases helps on decision for everybody such if to avoid crowded spaces or staying home when having respiratory symptoms.


### Numbers to Monitor
1. How many people have mild, severe, hospitalization requiring Covid or even deadly Covid.
2. How many of the people, which have respiratory diseases have Covid-19. In many areas likely the most common respiratory disease is Covid-19 and so one should stay home with any respiratory symptoms. 
    > Personal guess, 16.10.20: In many regions of Europe, the most common respiratory disease is Covid-19. Moreover the steep increases in cases despite protection measures in place including strict quarantine of known infected, indicate that across Europe the majority of cases are undetected and carry the spread. ([Example Calculation of Spread](../7_social/controlling.md#example-calculation-of-spread) in the section [Handling Covid-19 Cases and Quarantine](../7_social/controlling.md#covid-19-cases-and-quarantine))
3. The incidence of Covid-19 in different population groups (e.g. hospital workers, young people: students and school children)
4. Other respiratory diseases: influenza and common colds should be monitored too:
  * knowing what is around makes diagnosis easier, especially if it turns out there is 'only' Covid-19
  * long term adverse effects of some common cold viruses are likely underestimated. This is a good opportunity to diminish there prevalence and reduce the number of strains circulating. 


### How to Monitor
* **Frequency:** Ideally these are taken near daily, else at least weekly. Though this depends
* **Communication:** Often (as of 16.10.20) only the positive tests and the positive test rate are communicated. However more complete data would allow more accurate interpretations: 
  * many of the tested often are health care professionals (who know how to protect or have an increased immunity and incidence is thus underestimated), 
  * how many of the tested are healthy and just need some clean sheet to travel, 
  * how many who are tested have symptoms, 
  * how many are tested because of company monitoring.
* **Methods:**
  see also [testing priorities](#suggested-testing-priorities)
  * **very low to low incidence:** case counts 
  * **low to mid incidence:** case counts people turn up for testing can be used. The contact tracing yields then additional cases which can be used to scale counts from those who asked for tests. 
  * **mid to high incidence:** sampling
  

### Estimating Prevalence
For practical reasons the overall prevalence has to be estimated.

#### Validate Estimates
The equation 
`current_death_count = estimated_past_case_count * fatality_rate` 
can be used to detect if the estimation methods worked in the past. How fare in the past depends how long on average the patients survive and whether takes the date of infection or the date of going for a test ([Different Counts](#different-counts)). Assuming a fatality rate of 0.25% is equal to one in 400  Covid infectees dies. So the 
`estimated_past_case_count = 400 * current_death_count` 
The case can be different yielding a correction factor:
`correction_factor = estimated_past_case_count/past_case_count_from_death_count`
If the estimation method didn't change the current actual infected can be estimated with the correction_factor: 
`new_estimated_case_count = correction_factor * estimated_case_count`.


#### On Estimates Out of Bounds
A correction factor greater than 2 needs a redesign of the case estimates. A correction factor larger than 5 combined with a death count greater than 2.5 per million per day I consider worrying (Sections [Strategy](../7_social/controlling.md#strategy) and [On Numbers](#on-numbers)). How much worrying depends whether, when and how effective the measures have been adapted since. 
Transmissions should be reduced or even prevented until a clear view is available. In serious situations (possible hospital overflow), a tactics uniform across movement areas and between them movement monitoring/control/reduction can be necessary.

1. Pausing infections especially everything super-spreading opportunities for a few days until testing and estimates are available. Do [outdoor days](../7_social/controlling.md#outdoor-days) and possibly some restrictions on indoor rooms: 
  * closure of non essential businesses
  * for somewhat essential businesses e.g. longer distance public transport: names can be recorded and people need to hand in some argumentation in the next weeks why it was essential to enter. This causes few immediate work/tumults but likely discourages most from unnecessarily entering. 
  * whitelist approach if doable e.g. negative test/no fever required
  * pause of non essential visits to hospitals and so on
2. Sample and estimate the numbers
  * should be doable within a few days
  * 5'000 tests per million inhabitants should work to estimate to infection rate with an accuracy of .5% (Uniform -random- sampling) 
3. Choosing a tactics suiting the strategy given the situation
 

## Testing Schemes for different Situations

### Testing Priorities
> partly subjective section

Testing some for low and high incidence. Reasons are noted or already mentioned in the section [Numbers to Monitor](#numbers-to-monitor).
#### Testing Priorities at High Incidence 
1. Testing of risk patients. Reason: Appropriate treatment and prevention of spread (to other risk persons). 
2. Health care workers and other groups with contact to risk groups. Reason: Shield risk groups. 
3. How many people with respiratory disease symptoms have Covid-19. Reason: Appropriate advices for those experiencing respiratory symptoms.
4. Tests to do contact tracing. Reason: Break infection chains.
5. Sampling different population groups e.g. young people: students and school children, region based, incoming travelers. Reason: Have an overview what's going on to adapt measures. 
6. Monitoring respiratory diseases: influenza and common colds. 
7. Tests for travel permissions, quarantine cancel and so on.
    
#### Testing Priorities at Low Incidence 
1. Testing of risk patients. Reason: An appropriate treatment from early on.
2. Health care workers and other groups with contact to risk groups
3. Tests to do contact tracing and quarantine cancel
4. Tests to estimate the overall incidence (travel test below can give an indication). Reason: When the incidence is high, a different tactics for controlling can be appropriate.
5. Tests for travel permissions and so on. 

### Practical Testing Methods
Depending on the situation different testing methods are adequate.
Early morning saliva has a good detection rate of about 70% (high specificity with PCR; slightly lower sensitivity and lower specificity with antigen test.) and is easy to sample. So for most situations early morning saliva is recommended. Further discussed in the chapter [Diagnosis and Viral Load](../3_medical/diagnosis_and_viral_load.md) section [Diagnosis Suggestions by Test Goal](../3_medical/diagnosis_and_viral_load.md#diagnosis-suggestions-by-test-goal).



## From Numbers to Measures
[in work]

##### Assumptions and Comments
* _Fatality Rate:_ Fatality rate of .25% i.e. 1 in 400 (The [death rate](../3_medical/covid19.md#fatality-rate) depends on many factors and varies considerably); 
  * The **[fatality rate](../3_medical/covid19.md#fatality-rate) depends on many factors and varies considerably** for different regions and population groups.
  * The numbers below are for a __population without immunity in risk groups__ (mainly people without a good immune system). Increased resistance can be increased 
    * via the acquired immune system by previous infections or vaccines
    * via the overall immune system by a healthy living including daily movement. 
    * As it is known by summer 21, overly strict measures can diminish the immune defense against covid.

* _Numbers:_ 
  * The **numbers vary** across regions and hospitals capacities, population structure and how the infections are distributed across the population. 
  * The current numbers need to be estimated. The death count detects infections happened about 20 days in the past. The counts from contact tracing or testing symptomatic are a few days in the past.

* _Covid Cases:_
  * average disease duration 10 days; 
  * The case counts are the **actual infected** and not only the positive tested. 
  * The case counts/incidence can be higher for young people without directly affecting the death counts/hospital beds, so the case counts/incidences are averages for the population groups with the **possibility for severe Covid**. 
  * the Covid cases should be **lower in dry air settings** (e.g.during cold seasons), since aerosol transmission yields more severe cases and is hard to control and prevent. Immune protection can be built up in humid-air seasons (e.g. summer in moderate climate zones) but not in dry-air seasons. 



##### Notations and Equivalences
* all counts are day counts unless noted otherwise
* case count per million inhabitants per day = 400 * death count per million inhabitants per day (assuming 1 death in 400)
* total current infected per million = 10 * case count per million per day (assuming 10 day infection duration)
* K = 1000 e.g. 10 K = 10'000

##### On Numbers

> written for autumn/winter 2020; as of summer 2021 the goal is with appropriate preparations such as healthy living and vaccination of high risk groups and early diagnosis combined with early adequate treatments to reduce Covid deaths while keeping overall health in mind (Following the [Strategy](../7_social/controlling.md#strategy) discussed on the controlling page). Most measures (including vaccines) have their costs and risks 

total current infected in percent  | total current infected per million | case count per million inhabitants per day | death count per million inhabitants per day | comment if the estimated values are for several days greater and *no* adequate measures in place
--------|--------|------|--------|---
0.2%   |2 K     | 200  |  ~.5   | if less or not increasing or mainly young infected: loose rules, self responsibility
0.4%   |4 K     | 400  |  ~1    | if greater and increasing: **monitoring** needed. Prefer outdoors to indoors
1 %    |10 K    | 1000 |  ~2.5  | worrisome if greater and case count increases => tighten the rules, infection risk is increased due to many infected. 
4 %    |40 K    | 4000 |  ~10   | roughly the maximum death count reached in Sweden and France in Spring 2020, death count reached in autumn (15.10 - 31.10.) in heavy hit regions of Switzerland (VS, SZ, FR) //to update
5%     |50 K    | 5000 | ~12.5  | **prevent**, infection risk high for everybody, temporary hospitals may be needed
10%    |100 K   |10'000| ~25+   | **prevent even at very high costs**, **hospitals can get overwhelmed**, reached in regions caught on the wrong foot
15%    |150_K   |15'000| ~50++  | Hospitals overwhelmed and chaotic situations likely. Death rate doubles or more, reached in heaviest hit regions.


## Data 

### Distributed Handling
Data production / collection, data description and data analysis can be done separate today. Remark: Separation of roles has a long tradition in science: Tycho Brahe collected the planetary motions, Kepler described them and Newton explained them.

Today separation of roles can be done faster, easier and in cooperation, thanks to modern communication technologies. The basis is, that data is observed/produced, recorded (often free of costs nowadays), annotated and searchable published.

In computer science it is well known that distributed and parallel data handling works best. This even on computers with only a couple of cores.
* Map reduce and similar
* Programming paradigms enabling parallel execution data handling

We humans have billions of brains, so with good communication we've got a lot of brain power to tackle any task.

<!--
* there are many skilled data scientists around the world. Many spending their time presenting us the most relevant ads. Relevant usually means highest click rate i.e. most distracting. Whether the distraction is good or bad depends on pre and post activity, e.g. to analyze Covid data for a change can be welcome. Remark: I consider adds as useful for product information and spread. -->

### Data Specifications
For data analysis it is important to have accurate, consistent and clearly specified data and notifications about possible inaccuracies or changed specifications. Notified corrections are helpful too.

The different measurement methods regarding Covid-19 with no or few specifications have a lot of space for improvement all around the world. A uniform agreement on annotations would make the data better comparable.

<!--todo:update -->
E.g. In Switzerland as of 17.4.20, the testing policy is to test only people who are sick _and_ belong to a risk group. The policy is mostly followed, however is hard to find on the official page from the BAG (Swiss Health Department, bag.admin.ch in the German Covid-19 FAQ) and even left out on the English version (as of 17.4.20). The official statistics on the same domain, has no note about this testing scheme. The data are analyzable (since largely consistent) and expressive but just not comparable to countries, where everybody who is sick or even everybody who could be infected is tested.
Remark: As of 1.5.20 more people are allowed to test.

> Subjective Remark, 1.May 2020: While not perfect, the government and the BAG in Switzerland do overall a good job. What I consider done right: A slow down of life to have people focus on the important things among those health. A temporary slow down of spread to buy some time for preparation, experience gain and research. Personally, I liked (and helped me doing this page) that there was no stay at home order. Allowing people and especially children to go outdoors is important. The longer Covid-19 spread patterns can be analyzed the more fine-grained measures can be. A gradual reopening starting in April makes sense.
Room for improvement: Masks benefits indoors and that outdoors infection risk is much smaller should be clearly stated.
> To rate afterthought is much easier than to be there in charge with few proven and sure knowledge. In that view in all countries, there were difficult decisions and no clear right or wrong. Most countries found their path according to their situation. But I think now it is time to ease lock-downs step by step, especially in areas where there are not many severe Covid-19 cases. Around the world it remains important, however, to support public health. Keeping some slow down can be part of that. In case of new findings and knowledge, **adaption of strategies** is important.
Right or Wrong and Perfection anyways are often a matter of viewpoint and angle.


#### Data Features
* For analysis is useful to have as complete, accurate and fine-grained data as possible and data protection laws permit (e.g. age, medical conditions and locations).
* Clinical observations annotated and published with as much data as possible
* Interpretations and analyses are nice but data analysis can be done dis

#### Easy Readable
Data ideally are in a common format (e.g. CSV), on a public API (e.g. GitHub repository or REST API) and are annotated e.g. contain a readme with the specifications what and how is measured. 
