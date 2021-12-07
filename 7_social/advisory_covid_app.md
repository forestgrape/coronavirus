# Advisory Covid App

## Summary
In 2020 many Covid Apps worked by detecting an exposure risk. In 2021 many Covid apps work by an "immunity" and/or negative tested scheme. This approaches can be combined into an app which show the probability of being infected. Use cases are to know when to test to prevent transmission or initiate early on the right treatment upon infection.

## Introduction
Since early in the pandemics Covid apps are companions. In agreement with the general policies in the 2020 most apps worked by default allow: Upon exposure a warning is sent. Upon this quarantine rules can apply. Many apps moved to default deny with the starting of the vaccination campaigns in 2021: Unless 'supposedly' not infected, entry to certain areas is denied.

The epidemiological "implementation" is/was often as follows:
* Default allow apps often worked by defining an exposure/infection opportunity as being in close distance for a fixed time e.g. below 2 meters for more than 15 minutes. //since Covid is often transmitted by aerosol superspreading from a few highly infectious individuals while most don't transmit Covid the above method is/was not suitable.
* Default deny apps have usually work in a binary scheme and whitelist people supposedly not infectious (commented in [supposedly infection free](#supposedly-infection-free)).

## App Functionality
The idea is to combine the unify the app functionalities with a probabilistic model: 
* The app has a susceptibility score which denotes the personal risk of mild, moderate or severe infection.
* The app tracks (in a privacy respecting way) contact patterns with other persons. Based on the infection probability of the contacts, the app estimates and updates the personal chance of being infected.
* A negative test reduces and a positive test increases the probability of being infected. //Covid tests tend to have a high specificity, so in the case of a positive test an infection is very likely.

## Use Case
1. For people at risk for severe Covid, it is crucial for prognosis to initiate the right treatment early on. Upon a high risk exposure or many moderate exposures taking early morning saliva Covid test can be adequate to diagnose a possible infection very early (even before being symptomatic).
2. Being careful to prevent spread:
  * For a visit/meeting in a sensitive setting e.g. a hospital. If the app shows an increased infection probability, one can take additional precaution measures e.g. instead of an indoor lunch to an outside walk and/or to a Covid test the morning ahead.
  * Similarly for personal working in sensible locations, unless the being infected probability is low a test can be appropriate.



## Appendix
### Supposedly Infection Free
> 'Supposedly infection free' is usually equivalent to vaccinated, convalescent or tested. Convalescent is usually only valid for a few months and only after a positive PCR test and sometimes after a self paid antigen tests. So practically its either being vaccinated or being tested. Testing is cumbersome and additionally a quarantine penalty applies on a positive test. So Covid certificates as they are used are very close to vaccination obligation. 

> This despite there is *no* scientific foundation that vaccinated people transmit Covid less. Unlike vaccinated, immunity induced by natural infection offers some protection and antibody tests are risk free and cheap (the laboratory costs are cheaper than most vaccine are sold). However, the best protection is offered by a healthy lifestyle and contact with people such that the immune system is trained and in form. Epidemiological Evidence for the statements above are in the chapter [Individual Epidemiology](./../5_epidemiological/individual_susceptibility_and_transmission.md)). An immunological argumentation founding them is planned.

