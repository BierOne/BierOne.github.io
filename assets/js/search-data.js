// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "(&amp;#x2A) denotes corresponding author",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-backpack-trails-in-japan-kanto-關东篇",
        
          title: "Backpack trails in Japan - Kanto 關东篇",
        
        description: "coming soon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-trip-kanto/";
          
        },
      },{id: "post-backpack-trails-in-japan-hokkaido-北海道篇",
        
          title: "Backpack trails in Japan - Hokkaido 北海道篇",
        
        description: "coming soon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-trip-hokkaido/";
          
        },
      },{id: "post-backpack-trails-in-japan-kansai-關西篇",
        
          title: "Backpack trails in Japan - Kansai 關西篇",
        
        description: "Osaka, Nara, Kyoto, and Maizuru.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-trip-kansai/";
          
        },
      },{id: "post-backpack-trails-in-japan-kyushu-九州篇",
        
          title: "Backpack trails in Japan - Kyushu 九州篇",
        
        description: "Kagoshima, Ibusuki, Kumamoto, Unzen, Nagasaki, Fukuoka",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-trip-kyushu/";
          
        },
      },{id: "post-backpack-trails-in-japan-okinawa-沖繩篇",
        
          title: "Backpack trails in Japan - Okinawa 沖繩篇",
        
        description: "This is what life looks like. Naha, Nago, and Motobu.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/blog-trip-okinawa/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-gets-accepted-in-iclr-2024-with-spotlight-presentation-top-5-we-present-neuron-activation-coverage-nac-that-works-for-both-ood-detection-and-generalization-problems",
          title: 'One paper gets accepted in ICLR 2024 with Spotlight presentation (Top 5%). We...',
          description: "",
          section: "News",},{id: "news-one-paper-gets-accepted-in-tip-2024-this-paper-dicusses-the-feature-alignment-problem-of-the-contrastive-learning-and-presents-a-high-level-concept-contrast-approach",
          title: 'One paper gets accepted in TIP 2024. This paper dicusses the feature alignment...',
          description: "",
          section: "News",},{id: "news-i-am-looking-for-the-research-interns-working-on-llm-inference-acceleration-please-contact-me-if-you-are-interested-via-liuyibing03-baidu-com",
          title: 'I am looking for the research interns working on LLM inference acceleration. Please...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%79%69%62%69%6E%67%31%31%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/BierOne", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/billone_kari", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yibing-liu-9a78a91b8", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NcmJACMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
