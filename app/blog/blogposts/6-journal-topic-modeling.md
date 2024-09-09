---
id: "6"
hashtag: "#machinelearning"
title: "Exploring Latent Topics in my Diary"
date: "September 9, 2024"
---

This year, on my 26th birthday, I wanted to know the biggest themes and topics that have pervaded my life in the past few years. Turns out, journal entries are an excellent place to look for pervasive topics. So I took my journal data from the past few years and conducted topic modeling on it to find abstract clusters that loosely represent the main themes in my journals. 

### bullet journaling vs long-form narratives

I have always been a journaler, but in the past two years, I started to bullet journal, which dramatically increased my journaling frequency. 

Before I started bullet journaling, I used to journal every once in a blue moon, usually when things were not so good. These entries were bigger with a proper narrative arc and a coherent storyline. I used to believe that my journal entries need to present a stream of consciousness that makes sense. This put unnecessary pressure on my journaling practice. It became a writing performance and I simply was not up to it a lot of the times. Moreover, it created a breeding ground for confirmation bias. I used to take a small thought or feeling and make a big deal out of it, even if it didn’t start out as a big deal. 

More recently, I have realized that feelings and thoughts are fleeting and can exist on their own. 

This is where bullet journaling is incredibly helpful. 

I jot down thoughts and feelings as they arise, when they arise, without needing to situate them inside of a narrative. It has taken the pressure off of journaling for me. I journal nearly every day, without it feeling like a chore. The act of writing also helps me process my day-to-day thoughts and feelings real-time instead of it being just a retrospective activity. 

I still do occasional retrospective, long-form journaling every two weeks or so to make sense of my life outside of the day-to-day stuff. It has a grounding effect on my psyche on a larger time scale, similar to how bullet journaling centers me on a day-to-day basis. 

### topic modeling

For topic modeling, I initially wanted to only use my bullet journal entries for the past two years, which was fine for statistical techniques like LDA, but for transformer-based models like BERT, I needed a larger amount of data, so I combined my long-form entries and bullet journals together to get a bigger corpus. 

I collected all of my journal entires from 2022-2024 and organized them by date. 

Preprocessing steps include converting string dates into datetime objects, which could be useful if I want to do time-based clustering in the future. I also removed, URLs, spaces, newlines, non-alphanumeric characters etc. 

I ended up with ~1800 rows of entries and ~65000 words. 

I loaded an embedding model using sentence-transformers library, and use k-means clustering to identify topics. Then, I used UMAP through Bunkatopics package to visualize the results

### Results

![Image](/bunkatopic.png)

Roughly speaking, the top part of the visualization spans family, relationships, intimacy, and feelings, whereas the bottom part of the visualization spans money, work, school, interviewing, and goals. This makes sense because between 2022-2024, I got into a serious relationship next to graduating from college and navigating the start of my career. These larger topics are on the opposite ends of the chart because of a larger semantic difference between them. Towards the middle of the chart, there is a higher density of journal entries related to more abstract concepts such as trust, safety, discipline, depression and criticism. I did lots of inner work during the 2022-2024 period, which means exploring these areas in greater depth within my psyche.