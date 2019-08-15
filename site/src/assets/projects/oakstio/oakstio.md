# oakst.io

### Preface

Believe it or not (I don't know why you wouldn't) this is the fourth iteration of this website. I launched the first version of oakst.io back in late 2016, some few months after graduation. I had in my hands this freshly-minted degree in electrical engineering but I was still working at the grocery store who's five-years past biweekly paychecks helped pay for that very degree. I had never tried to get an internship and throughout college my grades were always trying belly-crawl out of that deep ditch that was left by a 0.9 Freshman Year GPA. I had a few interviews here and there but every hiring manager I spoke with *respectively* declined my application citing my lack of professional experience. I had several artist friends and they all had online portfolios that showcased their work and I figured, hey, electronics is *kind of* an art form. Maybe not a classic art like sculpture or fingerpainting but sure, art. I figured, hey, best case, it might help a hiring manager decide that I've got at least a little bit of clue.

The first version of this site was powered by [Wordpress](https://wordpress.com/) and was hosted by a hosting company that I won't mention by name. They gave me a good deal for the first year but wanted to almost triple the price on the renewell. This first iteration showcased some of the cool projects that I worked on during college.

In 2018 I cut ties with the first host and migrated over to [Bluehost](https://www.bluehost.com/). Migrated isn't the right word... it was more of a "start-from-scratch" kind of deal. I had somehow found a no-kidding professional career and figured it was time to probably put college projects behind me. The portfolio morphed into a blog that I would post semi-semi-regular updates on projects that I had been working on. This blog was still powered by Wordpress.

In 2019, I decided that it wasn't worth my time to keep posting blog updates. I don't think anybody was reading them, and if I didn't care, nobody else likely did either. I decided to retreat and refocus on my completed projects. Plus, I was tired of Wordpress and wanted to try out the [Ghost](https://ghost.org/) blogging platform. Ghost lasted all of one week. Let me explain...

In 2018, I started working on a graduate degree in Computer Engineering with a focus on the Internet of Things. Also in 2018, I moved offices and started a new job that has me primarily working on software. I'm the only guy in the office who does software and I've got the freedom to get the job done however I see fit. I decided we're going to push new software development into the direction of the web and I'm currently working on redeveloping the office's sunsetted software into something that can be run from a web browser.

So, if I've got this career trajectory that seems to be centered around web development, then why use Wordpress or Ghost? Why not build my own website?

### The Details

This website is powered by the [Angular](https://angular.io/) web framework. I had considered building a static website completely from scratch using classic vanilla HTML+CSS, but the truth is that very few modern websites are built this way. Modern demands required something dynamic and responsive. This is it. Besides, I wanted to flex my muscles.

The [Angular Universal](https://angular.io/guide/universal) package basically turns on server-side rendering. This means that the website is rendered on the web server and not in the user's browser. This allows quicker page loads and increased SEO. Sweet, sweet SEO.

I used the [Angular Material](https://material.angular.io/) package for it's simple typography. The navigation buttons also come from Material package.

The *Projects* and *Project Details* pages are actually documents written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and transpiled into HTML by the [ngx-markdown](https://www.npmjs.com/package/ngx-markdown) package. Markdown is incredibly easy to write in and will allow me to easily migrate to other frameworks and platforms, if/when needed.

This site is served by the [Express](https://expressjs.com/) server framework proxied by [NGINX](https://www.nginx.com/). SSL Certificates are provided by [Let's Encrypt](https://letsencrypt.org/). Everything is self-hosted on a low-cost [DigitalOcean](https://www.digitalocean.com/) droplet.

The oakst.io domain is registered through [Google Domains](https://domains.google/), with DNS records pointing to DigitalOcean and MX records pointing to [GSuite](https://gsuite.google.com/).

Non-sensitive source code for this website can be found on my [Github](https://github.com/bruthaearl/website).

### Future Efforts

This website is three quarters of a [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)). I'll eventually launch a MongoDB database to store the project documents and perhaps implement a tag/category system similar to Wordpress. As it stands, though, this site is simple enough to go without it.

*- July 2019*

