import Images from "../images/images";

let eastBostonStories = {
  "introduction": {
    story: `This interactive map of Boston renters’ stories tells a tale of evictions and displacement in our increasingly upscale rental market. Who is getting pushed out as rents rise and higher-income earners move in? These stories don’t represent the scale of no-fault evictions in Boston (complete and accurate data on no-fault evictions not possible to represent at this time), but they begin to illuminate the human impact.* Also, this small sampling of stories is just the start of this project - share your story through the form on this site, and we’ll put you on the map.

    *Pins on map don’t represent exact addresses of tenants but do denote the streets where stories took place.`
  },
  "east_boston": {
    title: "East Boston",
    type: "neighborhood",
    Latitude: 42.37,
    Longitude: -71.03,
    story: `Based on many stories we’ve heard from the frontlines of evictions and rent-increases in Boston, East Boston is one of the hardest-hit neighborhoods. Large corporate landlords like Hodara Real Estate Group, Newman Properties, RJ Leyden and Aaron Daigneault are buying and redeveloping scores of homes throughout East Boston, raising rents and forcing no-fault evictions in process, while 2016 began with over 10 larger high-end housing developments underway.`,
    images: [
      Images.images.east_boston
    ]
  },
  "sumner_st_1": {
    title: "Wilson, Diana and Samantha",
    owner: "N/A",
    type: "story",
    center: [42.367917, -71.037263], 
    rent: "N/A",
    story: `Wilson lived for 14 years in this apartment; Diana, almost 3. In this apartment their daughter, Samantha, was born. In November of 2016 they received an eviction notice. They intended to stay and fight their case, but the conditions of the building were dangerous: a central column of the building was broken. They decided to leave, but not empty-handed, and they engaged City Life/Vida Urbana for help in negotiation with the owners. Although they received some helpful economic compensation, they were unable to find another affordable apartment in East Boston. Now they live in better conditions in Everett, but they're further from their family, their community and the facilities of the neighborhood.  

Wilson vivió 14 años en ese apartamento; Diana, casi 3. Ahí nació su hija, Samantha. En noviembre de 2016 recibieron carta de desalojo. Intentaron quedarse y pelear su caso, pero las condiciones del lugar eran riesgosas: una columna central del edificio estaba rota. Decidieron irse, pero no con las manos vacías, por eso se apoyaron en Vida Urbana para negociar con los dueños. Aunque recibieron una buena compensación económica, no encontraron otro apartamento barato en East Boston. Ahora viven en mejores condiciones en Everett, pero están más lejos de su familia, de su comunidad y de las facilidades del barrio.`,
    Latitude: 42.367917,
    Longitude: -71.037263,
    images: [
      Images.images.sumnerstreet1
    ],
  },
  "chelsea_st_1": {
    title: "Marta, Ruth, and Margarita",
    owner: "Newman Properties",
    type: "story",
    center: [42.37, -71.03],
    rent: "$500+",
    video: "r01uPuaMlFw",
    story: `All of the tenants in this building received a no-fault eviction notice. Marta, one of the renters, says, "When I tried to get in touch with the new owners, they told me it was because the tenants of this building couldn't manage to pay between $1800 and $2100 a month - I pay $1300 a month - and it was for that reason that we were being evicted." Marta adds, "We're always talking with the people in our community about what's going on in East Boston, that they should push for their rights, that they should know that we have rights too."`,
    Latitude: 42.370697,
    Longitude: -71.037756,
    images: [],
  },
  "lubec_st": {
    title: "Ana and Luis",
    owner: "Hodara",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    video: "7bivuy3cMJ0",
    story: `When Alex Hodara bought the building Ana and Luis live in, he served no-fault eviction notices to the tenants the next month. "We didn't get an exact explanation for why they had to evict us," says Luis, whose child with special needs attends a nearby school. Seven tenants in this building signed a letter to Hodara demanding a "just cause" for eviction.`,
    Latitude: 42.370336,
    Longitude: -71.033936,
    images: [],
  },
  "maverick_st_1": {
    title: "Maverick Street Families",
    owner: "Maverick Street Realty",
    type: "story",
    center: [42.37, -71.03],
    rent: "$300",
    video: "uinevl-LnTI",
    story: `Thirty-one tenants, including 8 children, were displaced when the back wall of their adjacent buildings partially collapsed (shortly prior to the collapse, they had received a rent increase). After months of living in hotels, several families took refuge in the basement of Our Saviour's Lutheran Church nearby. One family continues to live in the church 7 months after the collapse. The owner would not rehabilitate the apartments for the tenants who lived there.`,
    Latitude: 42.369521,
    Longitude: -71.037244,
    images: [],
  },
  "gove_st": {
    title: "Natalia",
    owner: "RJ Leyden LLC",
    type: "story",
    center: [42.37, -71.03],
    rent: "$425",
    story: `Natalia, one of the tenants in this building, has lived in East Boston for 15 years and has lived on Gove St. for about 14 of those years. First, Natalia and the other tenants in this building received rent increases—Natalia's increase was $425 a month. Later, the tenants in the building received 30-day no-fault eviction notices.`,
    Latitude: 42.370093,
    Longitude: -71.033843,
    images: [
      Images.images.gove_natalia
    ],
  },
  "maverick_st_2": {
    title: "Idalia",
    owner: "Hodara",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    video: "EFBv-WVsuxU",
    story: `When Alex Hodara bought this building, he gave no-fault eviction notices to all the tenants. At first, Idalia didn't fully understand the eviction notice, written only in English. So, she brought it to City Hall, and they told her it meant that she had 30 days to leave her house.`,
    Latitude: 42.368669,
    Longitude: -71.035611,
    images: [],
  },
  "chelsea_st_2": {
    title: "Dario",
    owner: "Susan Yee",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    video: "RIf9o5jqwuU",
    story: `"I've lived in East Boston for around 18 years, and I wouldn't want to leave East Boston," says Dario. "[Where I recently lived] we were paying $1,150 in rent, and we were told that our lease wouldn't be renewed. Although were were trying to find a way to offer to pay more rent, the owner insisted...and we were evicted. And now that apartment is being rented out for $2000 a month." `,
    Latitude: 42.372135, 
    Longitude: -71.035824,
    images: [],
  },
  "princeton_st_1": {
    title: "Alma and Obdulio",
    owner: "Mikhail Turetsky",
    type: "story",
    center: [42.37, -71.03],
    rent: "$250",
    video: "k9527Qe2fxs",
    story: `Alma and Obdulio have two young children. They moved to Boston from Mexico about 10 years ago. They've lived in their current apartment less than half of that time. Their landlord, who owns several properties in East Boston, gave them a rent increase of $250 per month and later a 30-day eviction notice. "This case is definitely part of a bigger trend in East Boston of the displacement of families, especially lower-income families, immigrant families," says Hannah, Alma and Obdulio's attorney.`,
    Latitude: 42.376574,
    Longitude: -71.038111,
    images: [],
  },
  "chinatown": {
    title: "Chinatown",
    type: "neighborhood",
    Latitude: 42.35,
    Longitude: -71.06,
    story: `In Chinatown, rents are jumping so quickly that some residents worry the entire community will be displaced in the not-too-distant future, leaving behind “Chinatown” only in name. These are stories from a neighborhood struggling to hold ground.`,
    images: [
      Images.images.chinatown
    ]
  },
  "hudson_st_1": {
    title: "Ms. Yu, Ms. Youn, and Mr. Chung",
    owner: "N/A",
    type: "story",
    center: [42.348263, -71.061184],
    rent: "N/A",
    story: `From WGBH News, "Chinatown's Poorest Live In The Shadow Of Luxury": "Pei Ying Yu, a 67-year old home-health aide who last year was sharing a tiny one-bedroom apartment at 103 Hudson Street. She, her sister and a third person split the $700 dollar rent three ways. The structure owned by longtime Chinatown residents, Elizabeth Wing and Youn “Harry” Chung,  was sold to First Suffolk LLC for $480,000. The agent representing the firm wanted the building—an historic row house—cleared out immediately, says Pei Ying Yu, who resisted moving.

'He used a lot of ways to make life unbearable. He said he had to make repairs and made the building unlivable. He said he had to replace the stove, so he took away the stove, so we couldn’t cook. He said I have to repair the bathroom and made the bathroom unusable. And so we came to CPA to look for help. One of the staff at CPA even slept over one night to help make sure that the tenants would not be intimidated into having to move.'  

But the agent insisted. He eventually cleared them out of their apartment and drove them to a low-income hotel in Quincy and promised to move them back as soon as repairs were made. But a year later they were still at the hotel, until recently, away from their home health care clients in Chinatown and far from a subway stop. 

Yu eventually qualified for senior housing, but her sister, who is younger, did not. She is homeless and living with friends in Chinatown." 

Source: http://news.wgbh.org/2016/05/10/local-news/chinatowns-poorest-live-shadow-luxury`,
    Latitude: 42.348263,
    Longitude: -71.061184,
    images: [
      Images.images.hudsonstreet1
    ],
  },
  "tyler_st_1": {
    title: "Ms. Huang",
    owner: "N/A",
    type: "story",
    center: [42.349192, -71.061233], 
    rent: "N/A",
    story: `Ms. Huang was so scared when her landlord and the management company started telling her to move out of the apartment where she had been living for almost two years with her husband and young children. Every time she went to pay rent, the management told her to move. Before her lease ended, she received a subpoena from the landlord. Fortunately, she won the lottery for an affordable housing slot at One Green Way with the help of Chinese Progressive Association before the court date, so she didn't need to confront the landlord in court. "I am the lucky one", she said.`,
    Latitude: 42.349192,
    Longitude: -71.061233,
    images: [
      Images.images.tylerstreet1
    ],
  },
  "johnny_ct_1": {
    title: "Ms. Huang and Ms. Zhong",
    owner: "N/A",
    type: "story",
    center: [42.37, -71.03],
    rent: "$300",
    story: `"Ms. Huang and Ms. Zhong live in separate apartments in the same building. Ms. Huang and her husband are on the top floor, and they have 3 young children, including an infant. 
    Ms. Zhong lives with her husband and two daughters downstairs from Ms. Huang. In 2015, their row-house style building was sold to a new owner for over 1 million dollars. 
    
    The landlord raised Ms. Huang's rent in 2015 by $300 a month, and in 2016 is seeking to raise the rent again by another $250. Ms. Huang asked the landlord to lower the rate of rent increases, because her family is now paying more than 50% of their income in rent.
    
    Ms. Zhong's rent has risen by several hundred dollars to a total of $2600 per month. Because Ms. Zhong's family can't afford $2600 per month, and they're unable to find an affordable alternative in Chinatown, they're likely to be displaced from Chinatown in the spring of 2016."`,
    Latitude: 42.347993,
    Longitude: -71.063258,
    images: [
      Images.images.johnny12,
      Images.images.johnny11,
    ],
  },
  "beach_st_1": {
    title: "Mr. Wu",
    owner: "N/A",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    story: `Mr. Wu moved to Beach Street in January, 2014. In the spring of the following year, the landlord told Mr. Wu and his roommate to move out. The only reason the landlord stated was that she wants to make repairs to the apartment. Mr. Wu could benefit from a Just Cause Eviction ordinance. `,
    Latitude: 42.351311,
    Longitude: -71.059885,
    images: [
      Images.images.beach61
    ],
  },
  "tremont_st_1": {
    title: "Ms. Ye and Family",
    owner: "Tremont Development LLC 615",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    story: `Ms. Ye and her family had to move out of their Shawmut Ave. apartment building when it was sold in 2006. They then moved into an apartment on Tremont Street. In the decade that Ms. Ye's family has lived on Tremont, their rent has risen by over 45%.

    Three other Chinese families lived in the building. In April of 2015, the building was sold for $2.86 million to Tremont Development LLC 615. The principal agent for the LLC is Sean Kennedy who also owns Kennedy Design and Building LLC, which specializes in converting apartments to luxury condos. 
    
    As soon as 615 Tremont Street LLC bought the building, they started clearing out the building of the former residents. By the end of summer 2015, Ms. Ye and her family were the only ones left in the building because they have no place to move to. They continue to be the only ones left, and it's uncertain where the family will end up.`,
    Latitude: 42.342516, 
    Longitude: -71.074167,
    images: [
      Images.images.tremont611
    ],
  },
  "wash_corridor": {
    title: "Washington Street Corridor",
    type: "neighborhood",
    Latitude: 42.31,
    Longitude: -71.10,
    story: `As a “master plan” for rezoning the Corridor is drafted, here are stories of lower-income families of color squeezed out of Egleston Square, Dudley Square, and Forest Hills. Many are organizing to remain in place. `,
    images: [
      Images.images.wash_corridor
    ]
  },
  "homestead_st_1": {
    title: "Socrates",
    owner: "L M REALTY LLC",
    type: "story",
    center: [42.310506, -71.088496],
    rent: "$700",
    story: `Socrates's new landlord issued rent increases throughout his apartment building, and suddenly Socrates is facing a rent hike of $700 per month, an increase he could never afford. Working in building maintenance, well over half of his income would go toward rent if the dramatic increase were to take effect, causing him to have to vacate.`,
    Latitude: 42.310506, 
    Longitude: -71.088496,
    images: [
      Images.images.homesteadstreet1
    ],
  },
  "ruggles_st_1": {
    title: "Felicha, Purple, and Alzina",
    owner: "Advanced Property Management",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    story: `Advanced Property Management gave no-fault eviction notices to all of the tenants at three adjacent addresses on Ruggles St. During the winter holidays, Felicha, her sister Alzina, and 3 other families received notices of no-fault eviction. There are about 15 units here, and almost everyone else had already left. "I've lived in this building here for 16 years," says Felicha. "I've been a good tenant. I pay my rent. I just don't think it's fair."`,
    Latitude: 42.331563, 
    Longitude: -71.083258,
    images: [
      Images.images.rugglesstreet9131
    ],
  },
  "school_st_1": {
    title: "Dora, Rene, and Dulce",
    owner: "N/A",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    video: "JexUSb78rVU",
    story: `All of the tenants in this building received no-fault eviction notices. Several children and teenagers live there, like Dulce who attends Boston Latin School. They're worried that the eviction will disrupt their eduction and work, because rising rents in Boston prevent them from finding a new home within the city.`,
    Latitude: 42.313222,  
    Longitude: -71.097608,
    images: [],
  },
  "washington_street_1": {
    title: "Marvin",
    owner: "N/A",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    video: "PeANdSwTR8k",
    story: `Marvin's family home on Washington Street in the heart of Egleston Square was sold to an investor. Marvin was 18 years old when his family was evicted. Washington Street is being rezoned in a new "master plan" for the area while thousands of newcomers try to move into Boston. Most of Marvin's family has already moved out of the city to Randolph and Braintree. Marvin grew up deeply involved in the Egleston community, especially since his house was right next to the YMCA community center. Marvin says, "The 'master plan' or whatever's going on, it's interesting because I got people in this neighborhood that are gonna be going through what I went through. It starts from a couple people to a whole lot, to a whole community. And that's just not right."`,
    Latitude: 42.314093,  
    Longitude: -71.099801,
    images: [],
  },
  "chilcott_1": {
    title: "Josue",
    owner: "N/A",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    story: `Josue grew up in a house in Egleston Square. But after 17 years, Josue's family was displaced out of the neighborhood when their rent went up. Josue says, "The whole entire street was awesome, we all got along, especially in a snowstorm...everybody knew each other. But then as soon as the landlord decided to raise up the bills, people were leaving left and right." Josue still prefers his old neighborhood, and he tries to spend time with his friends and community in Egleston even since he's been displaced. Josue works with teens at the YMCA and engages them in local issues.`,
    Latitude: 42.313459,  
    Longitude: -71.099741,
    images: [
      Images.images.chilcott11
    ],
  },
  "lesher_st_1": {
    title: "Lesher Street Families",
    owner: "HHC One Arnold LLC",
    type: "story",
    center: [42.37, -71.03],
    rent: "$300",
    video: "gkzVdEYBCKA",
    story: `This building is home to 5 single parents and their kids. They received rent increases of $300 per month per unit. Then they received no-fault eviction notices. They've united in the face of their landlord's attempt to "clear-out" their building. They have built community watching each other's children and supporting each other while their housing is unstable. `,
    Latitude: 42.292612,  
    Longitude: -71.122229,
    images: [],
  },
  "hyde_mattapan": {
    title: "Dorchester, Hyde Park, and Mattapan",
    type: "neighborhood",
    Latitude: 42.266,
    Longitude: -71.110,
    story: `These stories come mainly from the tenants of large corporate landlords in this area. Advanced Property Management, for example, owns over 300 apartments in this area and has issued rent increases of over $500 per month.`,
    images: [
      Images.images.hyde_mattapan
    ]
  },
  "waldeck_st_1": {
    title: "Darcell, Chuck, and Others",
    owner: "Uwa Lawrence",
    type: "story",
    center: [42.299321, -71.065061],
    rent: "N/A",
    story: `Renters here made history in the fall of 2016 when they stood up for their rights and enabled a local nonprofit to purchase their apartments and convert them into affordable housing. Uwa Lawrence, the longtime owner of these Waldeck St. apartments—and a similar property at 25-35 Orlando St. in Mattapan—fell into bankruptcy. The renters here, many with Section 8 subsidies and several living with disabilities, decided to organize to determine the future of their homes. With help from Greater Boston Legal Services, Goulston & Storrs, Jones Day, and Pillsbury Winthrop Shaw Pittman LLP, as well as the City's Department of Neighborhood Development and the Boston Public Health Commission, the renters leveraged legal claims in court. The residents' claims enabled the Codman Square Neighborhood Development Corporation to purchase all 59 apartments and convert them into affordable housing for the current residents. In the end, the collective tenants’ voices and the impact of the $3.5 million in legal claims which they had documented against the estate—claims which they agreed to waive if a nonprofit purchased their homes—which swayed the Court. The judge chose Codman Square Neighborhood Development Corporation’s bid over the higher cash bid of a corporate landlord.`,
    Latitude: 42.299321,
    Longitude: -71.065061,
    images: [
      Images.images.waldeckstreet1
    ],
  },
  "river_st_1": {
    title: "Canute",
    owner: "Advanced Property Management",
    type: "story",
    center: [42.37, -71.03],
    rent: "$750",
    video: "YtsfCM0w90s",
    story: `Canute has lived for over a decade in an apartment building in Mattapan managed by a corporation called Advanced Property Management (APM). In several buildings in the area, APM has hundreds of tenants. Scores of tenants throughout these buildings have recently received rent increases in the range of $150 to $750 per month. "I got a notice stating that [my landord] Advanced Property Management needs $750 more per month. Now, I'm on a fixed income—I can't afford that, there's no way I can ... If I disagree with what they said, they will proceed in an eviction notice. I'm 72 years old, and I don't see myself being homeless. At my age, where am I going to go? My blood pressure is so high. ... Each morning I'm leaving my apartment and I'm looking for some kind of note attached to my door. It's very scary to me. Each day I'm so tense."`,
    Latitude: 42.259522,  
    Longitude: -71.117487,
    images: [],
  },
  "orlando_st_1": {
    title: "Monique",
    owner: "Uwa Lawrence",
    type: "story",
    center: [42.275246, -71.098618],
    rent: "N/A",
    story: `Renters here made history in the fall of 2016 when they stood up for their rights and enabled a local nonprofit to purchase their apartments and convert them into affordable housing. Uwa Lawrence, the longtime owner of these Waldeck St. apartments—and a similar property at 91-101 Waldeck St. in Dorchester—fell into bankruptcy. The renters here, many with Section 8 subsidies and several living with disabilities, decided to organize to determine the future of their homes. With help from Greater Boston Legal Services, Goulston & Storrs, Jones Day, and Pillsbury Winthrop Shaw Pittman LLP, as well as the City's Department of Neighborhood Development and the Boston Public Health Commission, the renters leveraged legal claims in court. The residents' claims enabled the Codman Square Neighborhood Development Corporation to purchase all 59 apartments and convert them into affordable housing for the current residents. In the end, the collective tenants’ voices and the impact of the $3.5 million in legal claims which they had documented against the estate—claims which they agreed to waive if a nonprofit purchased their homes—which swayed the Court. The judge chose Codman Square Neighborhood Development Corporation’s bid over the higher cash bid of a corporate landlord.`,
    Latitude: 42.275246,
    Longitude: -71.098618,
    images: [
      Images.images.orlandostreet1
    ],
  },
  "rosa_st_1": {
    title: "Sally and Kathleen",
    owner: "Advanced Property Management",
    type: "story",
    center: [42.37, -71.03],
    rent: "$150-$475",
    story: `Sally has lived in her home on Rosa Street for 14 years. Advanced Property Management recently gave Sally a rent increase of $150 per month. Sally's rent has gone up incrementally over the years, but this is the largest increase yet. Sally says, "It's overwhelming. Especially when you have children that are still in school. You don't know from day to day what these people are gonna do or what they're thinking. So I think that's a lot of pressure within itself."
    
    Kathleen, a 9-year-long tenant in the same building as Sally, received a $475 rent increase in 2016."`,
    Latitude: 42.261991, 
    Longitude: -71.112153,
    images: [
      Images.images.rosastreet1,
      Images.images.rosastreet2,
    ],
  },
  "river_st_2": {
    title: "Eddy",
    owner: "Advanced Property Management",
    type: "story",
    center: [42.37, -71.03],
    rent: "$500",
    video: "rbcPzgB-BTA",
    story: `Eddy has lived in his home on River St. Terrace for about 35 years. Eddy's 2 daughters were raised there. Advanced Property Management is asking for $500 a month more from Eddy's household. Eddy's wife recently suffered a stroke, and Eddy is retired and disabled. They live on a fixed income. "We have no where to go, because everywhere you go, rents are sky-high...We built the community - it's our community...I'm gonna stand firm, not to be removed."`,
    Latitude: 42.260764, 
    Longitude: -71.112528,
    images: [],
  },
  "river_st_3": {
    title: "Alan",
    owner: "Advanced Property Management",
    type: "story",
    center: [42.37, -71.03],
    rent: "$300",
    story: `Alan is a tenant of Advanced Property Management (APM). APM has hiked the rents of scores of their residents in Hyde Park and Mattapan. Alan says, "I received a $300 per month rent increase, and they're not negotiating with us." The increase would bring his rent payment to far beyond 50% of his income.`,
    Latitude: 42.269486, 
    Longitude: -71.091097,
    images: [
      Images.images.riverstreet431,
    ],
  },
  "harvard_ave_1": {
    title: "Arnie",
    owner: "N/A",
    type: "story",
    center: [42.37, -71.03],
    rent: "50%",
    video: "NuWNbEasBNU",
    story: `About a year ago, Arnie received a 50% rent increase while living in a studio apartment near the Hyde Park train station. Arnie couldn't afford it and moved into a homeless shelter. Arnie's been homeless for about a year, and began taking drugs as a way of coping with the challenges of homelessness. Sober for four months now, Arnie still laments the inaccessibity of housing while rents rise throughout Boston.`,
    Latitude: 42.259052,  
    Longitude: -71.122347,
    images: [],
  },
  "oakwood_st_1": {
    title: "Christina",
    owner: "Fannie Mae",
    type: "story",
    center: [42.37, -71.03],
    rent: "N/A",
    story: `Christina grew up in Roxbury and later moved into her family home in Dorchester. When Christina's aunt passed away, the home fell into foreclosure. Fannie Mae took control of the property and gave Christina a no-fault eviction notice. "Fannie Mae's playing hardball," said Christina. "If Just Cause eviction were in place, I'd have more time to move, or to see if negotiations went through...The home where I lived was a place of love, was a place of refuge."`,
    Latitude: 42.288452, 
    Longitude: -71.073895,
    images: [
      Images.images.oakwood31
    ],
  },
}

export default eastBostonStories;
