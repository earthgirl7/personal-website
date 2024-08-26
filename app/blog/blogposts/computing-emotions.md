---
id: "4"
hashtag: "#rabbithole"
title: "How Emotions Get Distored in AI"
date: "August 20, 2024"
---
Technology shapes our reality. 

We develop technology with incomplete information about the world, and we use assumptions to fill in the gaps; assumptions that could later turn out to be inaccurate. And sometimes, a certain way of building stuff, or doing stuff, catches fires because it is easy to scale, easy to market, easy to sell, easy to replicate, and so on. At this point, all the assumptions and methodologies are abstracted away and what we are left is what we interact with.

What then, becomes of our reality? 

*Distorted.*

How committed do we want to be to creating a virtual reality that encapsulates and reflects our best estimate of the truth of the world? 

The question of how to represent emotions computationally is a significant one because we, as humans, have not entirely agreed on what emotions are and how they work.

Yet, AI is catching fire and with it, AI-based emotion technology - rife with assumptions about the nature of emotion. Assumptions that may or may not stand the test of empiricism. 

In the case of AI, it’s not just our reality that gets distorted. If we are on the path to creating a technologically sentient being, then this new being would have a distorted view on human emotions. 

I could write a whole blogpost on what that means for our ability to empathize with each other, but for now, I am much more interested in highlighting the specifics ways that our understanding of emotions get distorted in AI systems. 


### divergent ideas on the nature of emotions

The first challenge to computing emotions is that we haven’t agreed on which framework or theory of emotion has the greatest explanatory power. Each has its strengths and weaknesses, but none stands out as the one-fit-all. 

The most popular theory is the Basic Emotion Theory. It says that we have 6-11 basic, universal emotions that can be detected via static facial expressions. It is widely used in early emotion recognition AI, but it has accrued a host of criticism from fellow psychologists and neuroscientists for it’s simplistic and reductionist view on emotions. It suffers from *forced choice paradigm*, focused only on facial expressions, and treats emotions as discrete entities.

As a slight improvement, we have the circumplex model by James Russell, which organizes emotions across two continuous dimensions: arousal (pleasantness) and valence (intensity). But it also does not take context into account, or entertain the idea of simultaneous and complex emotions.

Other interesting theories include Lisa Barrett’s theory of constructed emotion, which states that we don’t have fixed circuits for emotions in the brain. Instead, emotions are continuously constructed out of our past experiences and learning so we can infer the future in a way that reduces our brain’s predictive error. This is an extension of the the Bayesian brain hypothesis. 

Another psychologist names Fridlund argues that we evolved emotional expressions as primarily tools for social communication, rather than as involuntary displays of innate emotion.

I could go on populating this list with theories of emotion, each with varying levels of generalizability, explainatory power testability, and predictive utility. 

It is ironic that, "what is an emotion?" is still one of the toughest questions in affective science. There is an ever diverging influx of emotions, each making it's own theoretical assumptions about what an emotion even is.

Despite this uncertainty, there is a practical choice to be made for which framework or model to use, and this would shape the reality of how emotion is encoded into an AI system. 

### mapping theory to application

Some theories are easier to map onto technological frameworks. The Basic Emotion Theory by Paul Ekman fits into the supervised machine learning framework like a glove. It comes pre-built with labels for a set number of emotions, which an easily observable data format (image), and the images can be static. 

Other theories that introduce more nuance, such as more multimodal approaches, or constructivist takes that entertain the contextual nature of emotion, are not as intuitive to compute, scale, implement, etc. 

### bias due to data availability

Facial image data and voice data are widely available, but we don’t have as much data available for body movement, gesture, posture, autonomic body signals and such. This makes it so that if emotions are some multimodal emergent phenomenon, we are constrained to working with just a few modalities due to convenience. 

### abstraction of contexts

When we collect emotion data, the emotion in question is decoupled from its context. Then, it gets shuffled about inside algorithms, and then we make predictions from it for emotions of people in entirely different contexts. The context is abstracted away, and we seem to care very little about whether the original emotion was a felt emotion or a curated emotion. 

### circular reasoning in data labeling

If you give someone an image and ask them to tell you which emotion it is, and you only give them 5 options to pick from, you imply that these are all the emotions that exist. This is the *forced choice paradigm* that Paul Ekman’s early emotion recognition experiments suffered from. Similarly, when we ask actors to act out stereotypical representations of popular emotions, and then label these emotions respectively, we are forcing a specific emotion to be represented in the way we feel is appropriate.


-

I find it a matter of principle that we strive to minimize distortion of the truth. But I don't have the answer to which way of thinking about emotion is closest to truth. In practice, I am curious to explore further the question of how this would impact us in the event that we needed to interact with an artificially sentient being. 