# Investigate the Performance of U.S. Domestic Carriers from 2005-2015

## Summary 

In this project, the flight performance of all domestic U.S. carriers was investiagted for the period 2005-2015. The dataset for this study was obtained from the following link:https://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp?pn=1.The main visualization focuses on three different charts:
+ The averaged number of delay flights for the top five airlines with the highest number of delayed flights
+ The averaged percentaged of on-time flights for the top five airlines with the highest percentage of on-time flights
+ A distribution of number of flights delayed by different cause for all airines in the top five airlineds with the highest number of delayed flights.  

## Design 

### Data Exploration with RStudio 

The exploratory data analysis was conducted using RStudio. At first, I observed the obtained dataset, created a new flight performance summary grouping by carrier name and year. The new dataset is named: flight_summary which has the following 
+ Summ of all the arrivals for each carrier by year
+ Summ of all the delayed flights for each carrier by year
+ Sum of all diverted flights for each carrier by year
+ New variable is added: on_time = 1 - sum(arrivals)/sum(delayed)

The detailed of this step can be viewed via data/flight_performance_2005_2015.Rmd file. At first I plotted the on-time percentage for each carrier by year; however, this plot turned out to be very busy since there are 24 carriers in total. The figure was super clustered and squeezed into a corner since the legend takes all the space.

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic1.png)

Hence, I decided to organize my data more by averaging the number of delayed flights and the on-time percentage by carriers within that time period. I then generated two different bar charts which show the top five airlines with the highest averaged number of delayed flights ,and the top five airlines with the highest averaged on-time percentage during 2005-2015. The following plots were obtained: 

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic2.png)

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic3.png)

After creating these two plots, I went further to investigate the most common cause in delaying flights for all airlines in the top five with the highest number of delayed flights. In order to accomplish this task, I subset all the data points from the original dataset for these carriers, then sum up number of flights by each delay cause: weather, nas, security, arrival, etc... I then generated a multidimentionsal bar chart, which shows the distribution of the number of delayed flights by each cause for the five chosen carriers. This plot can be seen here or in the data/flight_performance_2005_2015.Rmd file. 

![alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic4.png) 

Lastly, I also investigated the performance of these airlines (in the top five delayed list) by generating two scatter plots which represents their on-time and arrival thoughout the year. Howver, since some of these airlines do not have data provided for certain years. These plots did not completely and effectively grade their performance during 2005-2015. Therefore, I decided to not include this particular graph for any data visualization improvement. 

[alt tag](https://github.com/HuongIvyNguyen/flight_performance/blob/master/figures/pic5.png)

### Data Visualization with D3.js and Dimple.js

I decided to improve the plots generated for the top five airlines with the highest averaged number of delayed flights, for the top five airlines with the highest averaged on-time percentage, for the most common delay cause. I implemented D3.js and dimple.js to improve the visualization of these plots. I then collected feedback and reevaluated my design a bit for all the charts. The intial design can be viewed in index-initial.html.

## Feedback
 I interviewed 3 people after showing them my intial design and asked for their feedback. 

### Feedback 1
> I recommend to remove all the gridlines from all plots so it is less messy when you look at the graphs. Also, all the fontsize needs to be bigger for better visualization. 

### Feedback 2
> The popup effect is very cool; however, it would be better off if you actually can make it a big bigger so people can read what the data is. Also, it probably will be better off if you can add in some other effect that can isolate the bar graph for each carrier in the last plot. This could help to emphasize which is the most common cause for delay flights for this carrier versus the others. It might be not necessary in this senario since all airlines seems to have arrival delay as the most common cause but may be good to include that so people can shift their attention to individual case. 

### Feedback 3
> I absolutely think you should change from stacked bar to grouped bar for the last bar graph since it might be a bit confusing if the top variable has a larger value than the bottom one. Also, the size of all the bars in the first two graphs should also be smaller. 

## Post-feedback Design


## Resources
+ [Dimple.js](http://dimplejs.org/)
+ [D3.js](https://d3js.org/)
