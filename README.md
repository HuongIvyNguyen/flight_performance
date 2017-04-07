# Investigate the Performance of U.S. DOmestic Carriers from 2005-2015

##Summary

In this project, the flight performance of all domestic U.S. carriers was investiagted for the period 2005-2015. The dataset for this study was obtained from the following link:https://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp?pn=1.The main visualization focuses on three different charts:
+ The averaged number of delay flights for the top five airlines with the highest number of delayed flights
+ The averaged percentaged of on-time flights for the top five airlines with the highest percentage of on-time flights
+ A distribution of number of flights delayed by different cause for all airines in the top five airlineds with the highest number of delayed flights.  

##Design

###**Data Exploration with RStudio

The exploratory data analysis was conducted using RStudio. At first, I observed the obtained dataset, created a new flight performance summary grouping by carrier name and year. The new dataset is named: flight_summary which has the following 
+ Summ of all the arrivals for each carrier by year
+ Summ of all the delayed flights for each carrier by year
+ Sum of all diverted flights for each carrier by year
+ New variable is added: on_time = 1 - sum(arrivals)/sum(delayed)

The detailed of this step can be viewed via data/flight_performance_2005_2015.Rmd file. At first I plotted the on-time percentage for each carrier by year; however, this plot turned out to be very busy.

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic1.png)

Hence, I decided to organize my data more by averaging the number of delayed flights and the on-time percentage by carriers within that time period. I then generated two different bar charts which show the top five airlines with the highest averaged number of delayed flights ,and the top five airlines with the highest averaged on-time percentage during 2005-2015. The following plots were obtained: 

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic2.png)

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic3.png)

##Feedback

##Resources
