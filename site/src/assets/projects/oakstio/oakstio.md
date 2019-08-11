# oakst.io

### Preface

Believe it or not (I don't know why you wouldn't) this is the fourth iteration of this website. I launched the first version back in late 2016, sometime after graduation. At that point in my life, I had an engineering degree but was still working at a grocery store. I had never tried to get an internship and my grades were still being dragged down deep by all of the fun I had during freshman and sophomore year. I had a few interviews here and there but every hiring manager *respectively* declined my application citing my lack of professional experience. I had several artist friends and they all had online portfolios that showcased their work and I figured, hey, electronics is *kind of* an art form. Maybe not classic art like sculpture or fingerpainting but art nonetheless. I figured, maybe just maybe, that it might help a hiring manager decide that I'm not completely incompetent.

The first version of this site was powered by [Wordpress](https://wordpress.com/) and was hosted by a hosting company that I wont mention by name. They gave me a good deal for the first year but wanted to almost tripple the price on the renewell. This first iteration showcased some of the cool projects that I worked on during college.

In 2018 I cut ties with the first host and migrated over to [Bluehost](https://www.bluehost.com/). Migrated isn't the right word... it was more of a "start-from-scratch" kind of deal. I had found a no-kidding professional career and figured it was time to probably put college projects behind me. The portfolio morphed into a blog that I would post semi-semi-regular updates on projects that I had been working on. This blog was still powered by Wordpress.

In 2019, I decided that it wasn't worth my time to keep posting blog updates. I dont think anybody was reading them, and if I didn't care, nobody else likely did either. I decided to retreat and refocus on my completed projects. Plus, I was tired of Wordpress and wanted to try out the [Ghost](https://ghost.org/) blogging platform. Ghost lasted all of one week. Let me explain...

In 2018 I started working on a graduate degree in Computer Engineering with a focus on the Internet of Things. Also in 2018, I moved offices and started a new job that has me primarly working on software. I'm basically the only guy in the office who does software and I've got the freedom to get the job done however I see fit. I made the decision to push new software development into the direction of the web and I'm currently working on redeveloping the office's sunsetted software into something that can be run from a web browser.

So, if I've got this career trajectory that seems to be centered around web development, then why use Wordpress or Ghost? Why not build my own website? 

### The Details

This website is powered by the [Angular](https://angular.io/) web framework. I had considered building a static website completely from scratch using classic vanilla HTML+CSS, but the truth is that very few modern websites are built this way. Modern demands reqired something dynamic and responsive. This is it. Besides, I wanted to flex my muscles.

The [Angular Universal](https://angular.io/guide/universal) package basically turns on server-side rendering. This means that the website is rendered on the web server and not in the user's browser. This allows quicker page loads and increased SEO. Sweet, sweet SEO.

I used the [Angular Material](https://material.angular.io/) package for it's simple typography. The navigation buttons also come from Material package.

The *Projects* and *Project Details* pages are actually documents written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and transpiled into HTML by the [ngx-markdown](https://www.npmjs.com/package/ngx-markdown) package. Markdown is incredibly easy to write in and will allow me to easily migrate to other frameworks and platforms, if/when needed. 

This site is served by the [Express](https://expressjs.com/) server framework proxied by [NGINX](https://www.nginx.com/). SSL Certificates are provided by [Let's Encrypt](https://letsencrypt.org/). Everything is self-hosted on a low-cost [DigitalOcean](https://www.digitalocean.com/) droplet.

The oakst.io domain is registered through [Google Domains](https://domains.google/), with DNS records pointing to DigitalOcean and MX records pointing to [GSuite](https://gsuite.google.com/).

Non-sensitive source code for this website can be found on my [Github](https://github.com/bruthaearl/website).

### Future Efforts

This website is three quarters of a [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)). I'll eventually launch a MongoDB database to store the project documnents and perhaps implement a tag/category system similar to Wordpress. As it stands, though, this site is simple enough to go without it.

*- July 2019*