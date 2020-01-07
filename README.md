# Postscript Frontend Take-Home Assignment

One of the most common SMS/MMS marketing concepts is that of the _campaign_, a message sent to all of an organization's subscribers or a subset based on demographics. For this take-home assignment, you will create a simplified dashboard for viewing, editing, and managing campaigns similar to the one we use at Postscript.

If you'd like to see a fully featured dashboard in action, you can create a free trial Shopify account and install Postscript on the [Shopify Store](https://apps.shopify.com/postscript-sms-marketing). Our campaign section is under `Campaigns`, and for inspiration on how to handle filters visit `Segments` or `Automations`.

## What We're Looking For

Technically speaking, your dashboard should demonstrate your skills by using all of the following techniques and technologies:

* Create the dashboard using React and any bundler/bootstrapping tool of your choice (`create-react-app`, Rollup, Gatsby, etc.). You must support or use ES6 syntax, and React **is required.**
* Style your dashboard any way you like; get creative with plain CSS, a UI toolkit for React, or anything else.
* Clean and idiomatic state storage in your application (higher order components and passing props, or even Mobx/Redux).
* Document your thought process with a short write-up explaining how you tackled the project.

You do not need to deploy or upload your application to the Internet. However, please be sure we can run it locally (a `package.json` file with all requirements, a docker container, etc.) so we can see your work in action!

We also have the following "soft skills" and requirements that will be taken into account:

* Demonstration of the 80/20 rule: Accomplish your task with 80% of the "polish" by using 20% of the effort it would take to "polish" completely.
* Creative, value oriented thinking. Have a great idea for editing campaigns? Add it.
* Decision making in a new feature. The dashboard is deliberately underspecified to give you the opportunity to create a fantastic feature with your perspective.

Please take **no longer than four hours** for the assignment. If you can create a minimally viable version of the dashboard in less time, that can give you an advantage. Creating an OK version in an hour is more impressive than a good version in four hours.

## Using The Placeholder Data

In the `data/` directory is an included JSON file with two object types: campaigns and segments. Use this data (along with mock data you need) to create your application.

```json
{
    "campaigns": [
        {...snip},
    ],
    "segments": [
        {...snip},
    ],
}
```

## User Stories

* I can view a list of my `Preview` (unsent) campaigns and their target segments.
* I can view a list of my `Sent` campaigns and their performance `stats` (amount sent, click through rates).
* I can create a new campaign or edit a `Preview` campaign.
    * There is a live preview of my campaign as I edit it.
    * I can add/edit a `media` link in my campaign to attach a picture or GIF to the message.
    * My created campaign can use _tags_ to replace parts of the message with variables.
    * Tags required for this demo are `{shop_link}`, `{first_name}`, and `{shop_name}`
    * You may add support for additional tags (custom links, personalized offers, etc.)!
* I can see a list of my `segments` and their stats.
* I can create new `segments` and save them for usage with campaigns.
    * At Postscript, `segments` are created based on demographic filters.
    * The placeholder API doesn't support filters, but you can implement your own client side if you wish.
