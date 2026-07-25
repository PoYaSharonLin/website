---
title: "User Behavior Tracking System: Data Collection"
date: 2026-04-20
tags: ["user-behavior"]
categories: ["engineering", "research"]
description: "This blog describe the process of collecting user data using javascript event listeners."
draft: false
---

# User Behavior Tracking System: Data Collection
From the previous blog, we have an overview of the user behavior tracking system, which consists of four main components: data collection, data processing, data storage, and data analysis. In this blog, we will dive into the details of the first component: data collection.

Before we start, let's briefly recall how to track user behavior from frontend UI interface. We can use javascript event listeners to capture user interactions such as mouse movements, clicks, scrolls, and keyboard inputs. These event listeners can be attached to specific HTML elements or the entire document to capture a wide range of user behaviors.

Thus, the overall logic is:
- STEP 1: Create UI interface 
- STEP 2: Attach event listeners to the UI interface to capture events 
- STEP 3: Define the data structure 
(how the rows gonna look like e.g x, y position of mouse, timestamp, event name, element name)
- STEP 4: Revisit event listener logic and data collected to make sure we can do analysis on that 
- STEP 5: Upload the data to the server for storage and analysis

---

## STEP 1: Create UI interface
The UI interface is what your theory goes in to practice. Using the paper as an example, we create a diet behavior self-reporting survey page, where respondents need to report their diet behavior using a customized slider bar, aiming to increase the laggings and therefore induce response costs. 

One thing note-worthy is that each element in the User Interface should be uniquely identifiable, so that we can attach event listeners to them and track user interactions accurately. This can be achieved by assigning unique IDs or classes to HTML elements, which allows us to easily select them using JavaScript and attach the necessary event listeners.

## STEP 2: Attach event listeners to the UI interface to capture events
Once we have our UI interface set up, we can attach event listeners to capture user interactions. For example, we can use the `addEventListener` method in JavaScript to listen for specific events such as `mousemove`, `click`, and `scroll`. 

### What events should we listen to? 

The next natural question arrises: which events should we listen to? The answer depends on the specific user behaviors we want to track and analyze. Take our own study as an example, we are interested in understanding:

1. What does respondent do before they use the slider bar? 
- What will non-misreporting respondents do before they answer compared to misreporters? 
- Will respondent under *Encourgement-Offering condition* express more interaction with the question itself, showing that mouse movement as simulated action (Hostetter & Alibali, 2008) compared to misreporters? (which could support the idea that encouragement-offering condition can increase cognotive level and therefore reduce misreporting)

2. How users interact with the slider bar?
- Do misreporters demonstrate more response competition (moving between desired action and potential distracting actions) compared to non-misreporters according to Weinmann et al., 2022? 

According to DOM element events https://www.w3schools.com/jsref/dom_obj_event.asp, we generally know that we would want to listen to `mousemove`, `click`, and `scroll` events. However, the details can be more nuanced then we thought as we think about the scenarios. 

### Events for 1. What does respondent do before they use the slider bar? 
Let's first address the mouse movements we need for 1. What does respondent do before they use the slider bar? 
Below is the table of events we are listening to when respondents are not moving the sliders, which is the first step before they interact with the slider bar, and the gap movement before they start to interact with the next slider bar. 

**Table 1. Not moving sliders events**
| # | DOM Event        | Handler                  | Recorded Type | Function |
|---|------------------|--------------------------|---------------|----------|
| 1 | mousemove       | onMouseMove             | mousemove    | Track cursor trajectory with per-pixel sampling, and mark whether the cursor is currently inside any `[data-track]` element |
| 2 | mousedown       | onMouseDown             | mousedown    | Record the position and timestamp when the mouse button is pressed (first half of a click) |
| 3 | mouseup         | onMouseUp               | mouseup      | Record the position and timestamp when the mouse button is released (second half of a click, can be used to estimate press duration) |
| 4 | keydown         | onKeyDown               | keydown      | Detect Enter/Space key presses on activatable elements. Replaces click tracking — mouse activations are reconstructable from mousedown+mouseup on the same target, while keydown captures keyboard-driven activation that would otherwise be invisible |
| 5 | selectionchange | onSelectionChange       | highlight    | Detect text selection, record the selected string, character count, and the top-left coordinates of the selection area |
| 6 | scroll          | onScroll                | scroll       | Record scroll events (throttled to once every 100ms), including scroll direction and `scrollX`/`scrollY` values |
| 7 | visibilitychange| onVisibilityChange      | —            | Pause flushing when the page becomes hidden; resume when visible again. Does not record an event, only controls the on/off switch |
| 8 | mouseover       | onDelegatedMouseOver    | mouseover    | Record the timestamp when the cursor enters the boundary of any `[data-track]` element. Also fires when moving between child elements (unlike `mouseenter`) |
| 9 | mouseout        | onDelegatedMouseOut     | mouseout     | Record the timestamp when the cursor leaves the boundary of any `[data-track]` element. Also fires when moving between child elements (unlike `mouseleave`). Can be used to calculate dwell time |

**Considerations**
1. `mousedown` and `mouseup` instead of `click`
   Please note that we do not listen to `click` event but `mousedown` and `mouseup`. Even though we do not have drag & drop element in our UI, that indicates `click` and `mousedown` + `mouseup` should be the same. However, there are chances that respondents may emulate a drag behavior even without a drag element, by enabling `mousedown` and `mouseup` and the element they are on using our home-made `data-track` attribute we can capture whether `mousedown` and `mouseup` happens on the same element or not. Furthermore, considering respondents may use keyboard to progress to the next page, we also listen to `keydown` event and record the key code (Enter or Space). 

2. `mouseover` and `mouseout` instead of `mouseenter` and `mouseleave`
   We choose to listen to `mouseover` and `mouseout` instead of `mouseenter` and `mouseleave` because the former will fire when moving between child elements, while the latter will not. This allows us to capture more interactions within the tracked elements, such as when respondents move their cursor between the child elements e.g. question itself, slider, and the background under the parent Question 1 card element. 

3. `keydown` event for keyboard interaction
   We listen to `keydown` event to capture keyboard interactions since some respondents may use keyboard to progress to the next page or submit their survey. Since we disable `click` event tracking, we need `keydown` event to capture keyboard-driven activation that would otherwise be invisible.

4. `mousemove` v.s. `mouseover`/`mouseout`
   `mouseover` and `mouseout` events are used to record when the cursor enters or leaves the boundary of any `[data-track]` element. On the other hand, `mousemove` event is used to track trajectory inside any `[data-track]` element. Short answer, `mousemove` tracks the trajectory, while `mouseover` and `mouseout` track the boundary crossing.

### Events for 2. How users interact with the slider bar?
For a typical dragging, mouse movements are triggered in the following sequence: `mousedown` -> `mousemove` + `input` (repeated many times while dragging) -> `mouseup` -> `input` (final) -> `change`(release the slider) -> `click` (a generic event for every `mousedown` and `mouseup` pair). 

Below is the table of events we are listening to when respondents are moving the sliders, which will be followed with our considerations as well. 

| # | DOM Event                          | Handler              | Recorded Type                  | Function |
|---|------------------------------------|----------------------|--------------------------------|----------|
| 1 | mousedown (global, tracker.js)    | onMouseDown         | mousedown                     | Fires when the user presses the mouse on the thumb (or any pixel of the slider). Event bubbles up to document and the global listener records it. Its timestamp aligns with the start of the drag. |
| 2 | mousemove (global, tracker.js)    | onMouseMove         | mousemove                     | Fires for every cursor movement while dragging. Records the raw pointer trajectory independently of slider values. |
| 3 | input (element-scoped)            | onInput             | slider (phase: 'drag')        | Fires continuously while the user drags the thumb or nudges the value (mouse drag or keyboard arrows). Each intermediate value is recorded with the last known cursor position, tagged as phase `'drag'` (user is still adjusting). A final `input` also fires when dragging ends. |
| 4 | mouseup (global, tracker.js)      | onMouseUp           | mouseup                       | Fires when the user releases the mouse button. Shares its timestamp with the final slider record. |
| 5 | change (element-scoped)           | onFinish            | slider (phase: 'release')     | Fires once when the user commits the final value (mouse release or keyboard adjustment complete). Records the final selected value tagged as phase `'release'`, representing the answer the user settled on. |
| 6 | pointermove (element-scoped)      | onPointerMove       | —                             | Continuously updates the component's local `pointerX`/`pointerY` state. Does **NOT** record a tracker event — it only supplies coordinates for the `input` and `change` records. |

**Considerations**
1. Removal of `click` event tracking
   Since we can reconstruct mouse activations from `mousedown` + `mouseup` on the same target, and we have `keydown` to capture keyboard-driven activation, we choose to remove `click` event tracking to reduce redundancy and potential noise in the data.

2. `mousemove` v.s. `pointermove`
   Since `input` and `change` does not have the `.clientX` and `.clientY` function to track the location, the `pointermove` event provides real-time coordinates for the `input` and `change` records. Thus, this would not overlap with the use of `mousemove` event. Think of the example that the input event will be `{input, null, null, timestamp, drag, value}` but now with `{input, x, y, timestamp, drag, value}` with the help of `pointermove` event. `mousemove` on the other hand, tracks the pointer trajectory between the multiple times of `input` events as respondents revise their answer while dragging the slider.

## STEP 3: Define the data structure 
(how the rows gonna look like e.g x, y position of mouse, timestamp, event name, element name)
This is a rather minor step. The data structure can be defined in which ever way that suit you and whichever naming convention that you prefer, e.g. kebab, snake, camel etc. However, if you expect that your data structure will be changed constantly and you have the need of conducting data serialization, it is better to opt for MsgPack rather than Protobuf, since the former does not require developer to define a fixed schema. For more infromation about the comparison between MsgPack and Protobuf, please refer to this article: [Protobuf vs MessagePack](../protobuf-vs-msgpack).

## STEP 4: Revisit event listener logic and data collected to make sure we can do analysis on that 

## STEP 5: Upload the data to the server for storage and analysis


## References:

Hostetter, A. B., & Alibali, M. W. (2008). Visible embodiment: Gestures as simulated action. *Psychonomic bulletin & review, 15*(3), 495-514.

Weinmann, M., Valacich, J. S., Schneider, C., Jenkins, J. L., & Hibbeln, M. (2022). The path of the righteous: Using trace data to understand fraud decisions in real time. *MIS Quarterly, 46*(4), 2317–2336.