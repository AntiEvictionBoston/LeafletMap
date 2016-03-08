export const photos = {
  benningtonSt: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/10_bennington_st.png",
  brooksSt: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/10_brooks_st.png",
  maverickStreet21: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/21_maverick_st.png",
  maverickStreet17: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7d72d309b144cd5dd25f5ce53563b33472d775eb/images/17_maverick_st.png",
  saratogaPorch: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/22_saratoga_porch.png",
  saratogaStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/22_saratoga_street.png",
  chelseaStreet25: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/25_chelsea_st.png",
  chelseaStreet35: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/35_chelsea_street.png",
  lubecStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/64_lubec_street.png",
  goveStreetMailbox: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/gove_street_mailboxes.png",
  goveStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/master/images/gove_street.png"
}

export function eagerLoadImages () {
  for (let key in Object.keys(photos)) {
    let i = new Image;
    i.src = photos[key];
  }
}
