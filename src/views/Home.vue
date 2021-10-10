<template>
  <div :class="$vuetify.breakpoint.mobile ? 'h5-page' : 'pc-page'">
    <v-row>
      <v-col cols="12">
        <div class="sectionMint">
          <v-container class="header">
            <v-row :class="$vuetify.breakpoint.mobile ? 'mx-2' : 'ml-2'">
              <v-col cols="12" md="2">
                <div
                  v-if="$vuetify.breakpoint.mobile"
                  class="d-flex justfiy-around socialList"
                >
                  <div class="socialItem">
                    <v-btn
                      href="https://discord.gg/7dbgB5jDvE"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v2"
                        data_iconName="ic-discord"
                      ></svg-icon>
                    </v-btn>
                  </div>
                  <div class="socialItem">
                    <v-btn
                      href="https://www.instagram.com/daughtersofrainbownft/"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v2"
                        data_iconName="ic-instargram"
                      ></svg-icon>
                    </v-btn>
                  </div>
                  <div class="socialItem">
                    <v-btn
                      href="https://twitter.com/dorlovenft"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v2"
                        data_iconName="ic-twitter"
                      ></svg-icon>
                    </v-btn>
                  </div>
                  <div class="socialItem">
                    <v-btn outlined small fab>
                      <svg-icon
                        className="v2"
                        data_iconName="ic-opensea"
                      ></svg-icon>
                    </v-btn>
                  </div>
                </div>
                <div v-else class="d-flex justfiy-around socialList">
                  <div class="socialItem">
                    <v-btn
                      href="https://discord.gg/7dbgB5jDvE"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v4"
                        data_iconName="ic-discord"
                      ></svg-icon>
                    </v-btn>
                  </div>
                  <div class="socialItem">
                    <v-btn
                      href="https://www.instagram.com/daughtersofrainbownft/"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v4"
                        data_iconName="ic-instargram"
                      ></svg-icon>
                    </v-btn>
                  </div>
                  <div class="socialItem">
                    <v-btn
                      href="https://twitter.com/dorlovenft"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v4"
                        data_iconName="ic-twitter"
                      ></svg-icon>
                    </v-btn>
                  </div>
                  <div class="socialItem">
                    <v-btn
                      href="https://twitter.com/dorlovenft"
                      outlined
                      small
                      fab
                    >
                      <svg-icon
                        className="v4"
                        data_iconName="ic-opensea"
                      ></svg-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col
                cols="12"
                md="2"
                class="wallet"
                :class="$vuetify.breakpoint.mobile ? 'mr-8' : ''"
              >
                <div :class="$vuetify.breakpoint.mobile ? 'mx-3' : 'ml-3'">
                  <v-btn
                    :class="
                      $vuetify.breakpoint.mobile
                        ? 'rounded-pill'
                        : 'rounded-l-pill'
                    "
                    block
                    class="text-capitalize"
                    dark
                    x-large
                  >
                    <div @click="connectWallet" v-if="!local_address">
                      <v-icon large>mdi-wallet-outline </v-icon>
                      Connect Wallet
                    </div>
                    <div v-else>
                      {{ local_address.substring(0, 6) }}***{{
                        local_address.substring(35)
                      }}
                    </div>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="mint">
            <v-row class="px-4 pb-6">
              <v-col cols="12" md="6">
                <div class="mang glow">
                  <v-img src="../assets/blindBox.png"></v-img>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div
                  :class="
                    $vuetify.breakpoint.mobile ? 'mx-3' : 'mx-7 mt-10 px-5'
                  "
                >
                  <v-row
                    v-if="false"
                    class="countDown mt-5 font-weight-bold"
                    :class="$vuetify.breakpoint.mobile ? 'text-h5' : 'text-h3'"
                  >
                    <v-col class="timeC">2</v-col>
                    <v-col>:</v-col>
                    <v-col class="timeC">0</v-col>
                    <v-col>:</v-col>
                    <v-col class="timeC">45</v-col>
                    <v-col>:</v-col>
                    <v-col>35</v-col>
                  </v-row>
                  <v-row :class="$vuetify.breakpoint.mobile ? '' : 'my-10'">
                    <v-col class="px-0">
                      <v-card v-if="true" class="operateBtn" color="#AA99EA">
                        <v-row
                          justify="center"
                          style="overflow: hidden; max-height: 72px"
                        >
                          <v-col class="star text-center" cols="2">
                            <v-icon size="30" color="#4b3983">mdi-star</v-icon>
                          </v-col>
                          <v-col @click="mintNft" cols="7">
                            <span style="color: #4b3983" class="text-h6"
                              >MINT
                              <span class="cfff">
                                for {{ salePrice }} ETH</span
                              ></span
                            >
                          </v-col>
                          <v-col
                            cols="3"
                            class="pa-0"
                            style="background-color: #fff"
                          >
                            <div class="up" @click="buyNum += 1">
                              <img src="../assets/arrowTop.png" alt="" />
                            </div>
                            <div class="inputNum">{{ buyNum }}</div>
                            <div
                              class="up"
                              @click="buyNum > 0 ? (buyNum -= 1) : 0"
                            >
                              <img src="../assets/arrowDown.png" alt="" />
                            </div>
                          </v-col>
                        </v-row>
                      </v-card>
                      <v-img
                        class="mintBtn"
                        v-else
                        src="../assets/btn_coming_soon.png"
                      ></v-img>
                    </v-col>
                  </v-row>
                  <v-row :class="$vuetify.breakpoint.mobile ? '' : 'my-10'">
                    <v-col class="px-0">
                      <div class="hasMinted">
                        <span>Phase I: {{ saledNftNum }} / 999 </span> DAUGHTERS
                        Minted
                        <!-- <span>Phase I : XXX / 999 </span> DAUGHTERS Minted -->
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="deadLine">
                    <v-col
                      class="px-0"
                      :class="$vuetify.breakpoint.mobile ? '' : 'ft20'"
                    >
                      <div>Private Sale : 11th Oct 2021 10am UTC</div>
                      <div>Official Launch : 13th Oct 2021 10am UTC</div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <v-img
          v-if="$vuetify.breakpoint.mobile"
          src="../assets/topH5Banner.png"
        >
          <div class="cfff px-3 text-center container">
            <p class="my-6 ft30 dorTitle">Daughters of Rainbow</p>
            <p class="ft20 ftw">1,523 Daughters of Rainbow</p>
            <p class="ftw mb-0">Minted on the Ethereum Blockchain</p>
            <div class="infoC ft14 mt-1 ftw l12 m0a">
              The Daughters of Rainbow is a 1,523-piece NFT project; the
              collaborative creative effort from an artist couple. One artist
              hand-painted 30 original daughters from portrait profiles
              collected from the streets of New York. The other then created
              1,523 daughters in digital media art form -- each with its own
              distinct style.
            </div>
            <p class="mt-10 ft20 ftw">
              <svg-icon
                className="logo_icon middle_svg"
                data_iconName="ic-rainbow"
              ></svg-icon>
              Rainbow Essence
            </p>
            <div class="infoC mt-2 ft14 ftw l12 m0a">
              The concept of the Daughters of Rainbow is anchored in the Rainbow
              Sea, which exists at the source of the Universe. All answers
              related to humans flow through the Rainbow Sea and manifest in the
              form of rainbow light. The artist hopes that NFTs in different
              forms can become virtual containers that capture this light -- the
              Rainbow Essence -- from the universe, storing the connection
              between humans and the Rainbow Sea, giving access to the answers
              to the source of life.
            </div>
          </div>
        </v-img>
        <v-img v-else class="" src="../assets/imgTopbannerBackground.png">
          <v-row>
            <v-col></v-col>
            <v-col cols="8">
              <div class="infoC text-center container">
                <p class="my-16 dorTitle" style="font-size: 80px">
                  Daughters of Rainbow
                </p>
                <p class="text-h4">1,523 Daughters of Rainbow</p>
                <p class="text-h5 ftw">Minted on the Ethereum Blockchain</p>
                <div class="ft20 mt-6 mb-6 m0a" style="max-width: 1500px">
                  The Daughters of Rainbow is a 1,523-piece NFT project; the
                  collaborative creative effort from an artist couple. One
                  artist hand-painted 30 original daughters from portrait
                  profiles collected from the streets of New York. The other
                  then created 1,523 daughters in digital media art form -- each
                  with its own distinct style.
                </div>
                <p class="text-h4 mt-10 pt-16">
                  <svg-icon
                    v-if="$vuetify.breakpoint.mobile"
                    className="logo_icon middle_svg mr-1"
                    data_iconName="ic-rainbow"
                  ></svg-icon>
                  <svg-icon
                    v-else
                    className="v2 middle_svg"
                    data_iconName="ic-rainbow"
                  ></svg-icon>
                  Rainbow Essence
                </p>
                <div class="ft20 mt-6 m0a" style="max-width: 1500px">
                  The concept of the Daughters of Rainbow is anchored in the
                  Rainbow Sea, which exists at the source of the Universe. All
                  answers related to humans flow through the Rainbow Sea and
                  manifest in the form of rainbow light. The artist hopes that
                  NFTs in different forms can become virtual containers that
                  capture this light -- the Rainbow Essence -- from the
                  universe, storing the connection between humans and the
                  Rainbow Sea, giving access to the answers to the source of
                  life.
                </div>
              </div>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-img>
        <div class="text-center m0a sectionLaunch">
          <div class="infoC m0a" style="max-width: 1500px">
            <p
              :class="$vuetify.breakpoint.mobile ? 'text-h4' : 'text-h3'"
              class="mt16 text-center sectionTitle"
            >
              <svg-icon
                v-if="$vuetify.breakpoint.mobile"
                className="logo_icon middle_svg mr-1"
                data_iconName="ic-launch"
              ></svg-icon>
              <svg-icon
                v-else
                className="v2 middle_svg"
                data_iconName="ic-launch"
              ></svg-icon>
              Launch Plan
            </p>
            <v-row>
              <v-col v-if="!$vuetify.breakpoint.mobile"></v-col>
              <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 8">
                <p :class="$vuetify.breakpoint.mobile ? '' : 'ft20'">
                  There will be 1,523 Daughters of Rainbow NFT in phase I
                  collection. Each cost the flat rate of 0.05 ETH. 450 rare
                  animated daughters in phase II collection. Each cost 0.15 ETH.
                  Private sale is at 11th Oct 2021 10am UTC. Official launch is
                  at 13th Oct 2021 10am UTC. Please visit our twitter account to
                  join our Private-sale whitelist and get updates.
                </p>
              </v-col>
              <v-col v-if="!$vuetify.breakpoint.mobile"></v-col>
            </v-row>
          </div>
        </div>
        <div>
          <div id="bg" ref="bg" :style="bgStyle" class="animation" />
        </div>
        <v-img v-if="$vuetify.breakpoint.mobile" src="../assets/h5Color.png">
          <v-container>
            <div class="my-12">
              <h1 class="text-center mx-10 cfff sectionTitle">
                <svg-icon
                  v-if="$vuetify.breakpoint.mobile"
                  className="logo_icon middle_svg mr-1"
                  data_iconName="ic-roadmap"
                ></svg-icon>
                <svg-icon
                  v-else
                  className=" middle_svg"
                  data_iconName="ic-roadmap"
                ></svg-icon>
                Roadmap
              </h1>
              <h4 class="d-flex mx-3 mb-4">
                <div>
                  <img
                    style="width: 41px"
                    class="mr-2 mt-4 middle"
                    src="../assets/diamand.png"
                  />
                </div>
                <div class="pt-4 cfff">
                  <span class="strc ft20">Phase I ：1,523</span> DAUGHTERS at
                  0.05 ETH/ piece (Blind-box)
                </div>
              </h4>
              <v-row justify="center" class="align-center mx-3">
                <v-col>
                  <v-img
                    contain
                    width="400px"
                    class="m0a"
                    src="../assets/glass.png"
                  >
                    <v-img
                      contain
                      class="mt-10"
                      src="../assets/mBoxPc.png"
                    ></v-img>
                  </v-img>
                </v-col>
                <v-col>
                  <div class="cfff ftw">
                    <div class="d-flex">
                      <div class="mr-1">
                        <svg-icon
                          className="logo_icon middle_svg"
                          data_iconName="buloat"
                        ></svg-icon>
                      </div>
                      <div>
                        Sell out 30% : Unlocks Daughters of Alien series on
                        Opensea ( 44 pieces with 0.07 ETH/ piece)
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="mr-1">
                        <svg-icon
                          className="logo_icon middle_svg"
                          data_iconName="buloat"
                        ></svg-icon>
                      </div>
                      <div>
                        Sell out 50%: Unlocks reward airdrop plan ( details to
                        be announced on discord/twitter)
                      </div>
                    </div>
                    <div class="ml-7">
                      - Holders of 5: receive a silver grade mix-n-match
                      Daughters ( total 5 designs with 10pc/each)
                      <br />
                      - Holders of 10: receive a gold grade mix-n-match
                      Daughters ( total 10 designs with 5 pc/each)<br />
                      - Holders of 20: receive a rainbow grade mix-n-match
                      Daughters (total 5 animated designs with 1 pc/each)<br />
                    </div>
                    <div class="d-flex">
                      <div class="mr-1">
                        <svg-icon
                          className="logo_icon middle_svg"
                          data_iconName="buloat"
                        ></svg-icon>
                      </div>
                      <div>Sell out 100%: Unlock Phase II rare Daughters</div>
                    </div>
                    <div class="ml-7">
                      - Holders of 3 will receive an e-Bible of Daughter’s
                      family ( details will be announced on discord/twitter)
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-divider
                style="border-color: #fff"
                dark
                class="my-10 mx-5 cfff"
              ></v-divider>
              <h4 class="d-flex pcFlexC mx-3 mb-4">
                <div>
                  <img
                    style="width: 41px"
                    class="mr-2 middle"
                    src="../assets/diamand_2.png"
                  />
                </div>
                <div class="cfff">
                  <span class="strc ft20">Phase II：450</span> Rare Animated
                  DAUGHTERS at 0.15 ETH/ piece (on Opensea)
                </div>
              </h4>
              <v-row justify="center" class="align-center mx-3">
                <v-col>
                  <v-img
                    contain
                    width="400px"
                    class="m0a"
                    src="../assets/glass.png"
                  >
                    <v-img
                      contain
                      class="mboxH5"
                      src="../assets/pic02.png"
                    ></v-img>
                  </v-img>
                </v-col>
                <v-col>
                  <div class="cfff ftw">
                    <div class="d-flex">
                      <div class="mr-1">
                        <svg-icon
                          className="logo_icon middle_svg"
                          data_iconName="buloat"
                        ></svg-icon>
                      </div>
                      <div>
                        30 unique animated daughters with 15 copies of each one
                      </div>
                    </div>

                    <div class="ml-7">
                      - They will be listed directly on Opensea <br />
                      - Holders of 3 will get mix-n-match daughter with random
                      rarity ( details to be announced on discord/twitter)<br />
                    </div>
                    <div class="d-flex">
                      <div class="mr-1">
                        <svg-icon
                          className="logo_icon middle_svg"
                          data_iconName="buloat"
                        ></svg-icon>
                      </div>
                      <div>Sell out 100%: Unlock Phase III</div>
                    </div>
                    <div class="ml-7">
                      - 5% of sales profit will be donated to a charity fund
                      supporting young artists and unlock Phase III
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-divider
                style="border-color: #fff"
                dark
                class="my-10 mx-5 cfff"
              ></v-divider>
              <h4 class="d-flex pcFlexC mx-3 mb-4">
                <div>
                  <img
                    style="width: 41px"
                    class="mr-2 middle"
                    src="../assets/diamand_3.png"
                  />
                </div>
                <div class="cfff">
                  <span class="strc ft20">Phase III：30</span> pieces of MOTHER
                  who created DAUGHTERS(On Opensea)
                </div>
              </h4>
              <v-row justify="center" class="align-center mx-3">
                <v-col>
                  <v-img
                    contain
                    max-width="400px"
                    class="m0a"
                    src="../assets/glass.png"
                  >
                    <v-img
                      contain
                      class="mboxH5"
                      src="../assets/pic03.png"
                    ></v-img>
                  </v-img>
                </v-col>
                <v-col>
                  <div class="cfff ftw">
                    <div class="d-flex">
                      <div class="mr-1">
                        <svg-icon
                          className="logo_icon middle_svg"
                          data_iconName="buloat"
                        ></svg-icon>
                      </div>
                      <div>
                        3 super rare MOTHER portraits with 10 copies each
                      </div>
                    </div>
                    <div class="ml-7">
                      - Auction: Bidding price <br />
                      - They will be listed directly on Opensea<br />
                      - Each holder of mother will receive a 3D version of
                      artwork ( details to be announced on discord/twitter)
                      <br />
                      - Owners of mother will be on VVIP pre-sale whitelist of
                      future artist titles and more rewards.
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-img>
        <v-img
          class="px-16 pb-10"
          max-height="2100"
          v-else
          src="../assets/pcColor.png"
        >
          <v-container>
            <h1
              :class="$vuetify.breakpoint.mobile ? 'text-h4' : 'text-h3'"
              class="text-center mt-10 cfff sectionTitle"
            >
              <svg-icon
                className="v2 middle_svg"
                data_iconName="ic-roadmap"
              ></svg-icon>
              Roadmap
            </h1>
            <h3 class="d-flex pcFlexC mb-4">
              <div>
                <img
                  style="width: 50px"
                  class="middle mr-2"
                  src="../assets/diamand.png"
                />
              </div>
              <div class="cfff">
                <span class="strc ft30">Phase I ：1,523</span>
                <span class="ft24"
                  >DAUGHTERS at 0.05 ETH/ piece (Blind-box)</span
                >
              </div>
            </h3>
            <v-row justify="center" class="align-center roadmapiItem">
              <v-col>
                <v-img
                  contain
                  width="400px"
                  class="m0a"
                  src="../assets/glass.png"
                >
                  <v-img
                    contain
                    class="mt-10"
                    src="../assets/mBoxPc.png"
                  ></v-img>
                </v-img>
              </v-col>
              <v-col>
                <h2 class="cfff">
                  <div class="d-flex">
                    <div class="mr-1">
                      <svg-icon
                        className="logo_icon middle_svg"
                        data_iconName="buloat"
                      ></svg-icon>
                    </div>
                    <div>
                      Sell out 30% : Unlocks Daughters of Alien series on
                      Opensea ( 44 pieces with 0.07 ETH/ piece)
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="mr-1">
                      <svg-icon
                        className="logo_icon middle_svg"
                        data_iconName="buloat"
                      ></svg-icon>
                    </div>
                    <div>
                      Sell out 50%: Unlocks reward airdrop plan ( details to be
                      announced on discord/twitter)
                    </div>
                  </div>
                  <div class="ml-7">
                    - Holders of 5: receive a silver grade mix-n-match Daughters
                    ( total 5 designs with 10pc/each) <br />
                    - Holders of 10: receive a gold grade mix-n-match Daughters
                    ( total 10 designs with 5 pc/each)<br />
                    - Holders of 20: receive a rainbow grade mix-n-match
                    Daughters (total 5 animated designs with 1 pc/each)<br />
                  </div>
                  <div class="d-flex">
                    <div class="mr-1">
                      <svg-icon
                        className="logo_icon middle_svg"
                        data_iconName="buloat"
                      ></svg-icon>
                    </div>
                    <div>Sell out 100%: Unlock Phase II rare Daughters</div>
                  </div>
                  <div class="ml-7">
                    - Holders of 3 will receive an e-Bible of Daughter’s family
                    ( details will be announced on discord/twitter)
                  </div>
                </h2>
              </v-col>
            </v-row>
            <v-divider
              style="border-color: #fff"
              dark
              class="my-10 mx-5 cfff"
            ></v-divider>
            <h3 class="d-flex pcFlexC mb-4">
              <div>
                <img
                  style="width: 50px"
                  class="middle mr-2"
                  src="../assets/diamand_2.png"
                />
              </div>
              <div class="cfff">
                <span class="strc ft30">Phase II：450</span>
                <span class="ft24"
                  >Rare Animated DAUGHTERS at 0.15 ETH/ piece (on Opensea)</span
                >
              </div>
            </h3>
            <v-row justify="center" class="align-center roadmapiItem">
              <v-col>
                <v-img
                  contain
                  width="400px"
                  class="m0a"
                  src="../assets/glass.png"
                >
                  <v-img
                    contain
                    class="mboxPc"
                    src="../assets/pic02.png"
                  ></v-img>
                </v-img>
              </v-col>
              <v-col>
                <h2 class="cfff">
                  <div class="d-flex">
                    <div class="mr-1">
                      <svg-icon
                        className="logo_icon middle_svg"
                        data_iconName="buloat"
                      ></svg-icon>
                    </div>
                    <div>
                      30 unique animated daughters with 15 copies of each one
                    </div>
                  </div>
                  <div class="ml-7">
                    - They will be listed directly on Opensea <br />
                    - Holders of 3 will get mix-n-match daughter with random
                    rarity ( details to be announced on discord/twitter)<br />
                  </div>
                  <div class="d-flex">
                    <div class="mr-1">
                      <svg-icon
                        className="logo_icon middle_svg"
                        data_iconName="buloat"
                      ></svg-icon>
                    </div>
                    <div>Sell out 100%: Unlock Phase III</div>
                  </div>
                  <div class="ml-7">
                    - 5% of sales profit will be donated to a charity fund
                    supporting young artists and unlock Phase III
                  </div>
                </h2>
              </v-col>
            </v-row>
            <v-divider
              style="border-color: #fff"
              dark
              class="my-10 mx-5 cfff"
            ></v-divider>
            <h3 class="d-flex pcFlexC mb-4">
              <div>
                <img
                  style="width: 50px"
                  class="middle mr-2"
                  src="../assets/diamand_3.png"
                />
              </div>
              <div class="cfff">
                <span class="strc ft30">Phase III：30</span>
                <span class="ft24"
                  >pieces of MOTHER who created DAUGHTERS(On Opensea)</span
                >
              </div>
            </h3>
            <v-row justify="center" class="align-center roadmapiItem">
              <v-col>
                <v-img
                  contain
                  max-width="400px"
                  class="m0a"
                  src="../assets/glass.png"
                >
                  <v-img
                    contain
                    class="mboxPc"
                    src="../assets/pic03.png"
                  ></v-img>
                </v-img>
              </v-col>
              <v-col>
                <h2 class="cfff">
                  <div class="d-flex">
                    <div class="mr-1">
                      <svg-icon
                        className="logo_icon middle_svg"
                        data_iconName="buloat"
                      ></svg-icon>
                    </div>
                    <div>3 super rare MOTHER portraits with 10 copies each</div>
                  </div>
                  <div class="ml-7">
                    - Auction: Bidding price <br />
                    - They will be listed directly on Opensea<br />
                    - Each holder of mother will receive a 3D version of artwork
                    ( details to be announced on discord/twitter) <br />
                    - Owners of mother will be on VVIP pre-sale whitelist of
                    future artist titles and more rewards.
                  </div>
                </h2>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        <div class="sectionCrew">
          <v-container>
            <h3
              :class="$vuetify.breakpoint.mobile ? 'ft30' : 'text-h3 mt-10'"
              class="cfff text-center sectionTitle"
            >
              <svg-icon
                v-if="$vuetify.breakpoint.mobile"
                className="logo_icon middle_svg mr-1"
                data_iconName="ic-crew"
              ></svg-icon>
              <svg-icon
                v-else
                className="v2 middle_svg"
                data_iconName="ic-crew"
              ></svg-icon>
              Crew
            </h3>
            <v-row no-gutters justify="space-around">
              <v-col cols="6" md="3" class="crewItem">
                <v-img
                  class="crewBackground"
                  :class="$vuetify.breakpoint.mobile ? 'waiK' : 'waiKPc'"
                  src="../assets/glass_crew.png"
                >
                  <v-img
                    contain
                    class="Mbox3"
                    src="../assets/crew-1.png"
                  ></v-img>
                  <div class="crewInfo text-center mt-2">
                    <h5 class="strc">
                      - Normal Normalｘ Yankong -<br />The Creator
                    </h5>
                    <h6 class="cfff">
                      An Artist couple in Taipei jointly brought DOR into life.
                    </h6>
                  </div>
                  <div justify="center" class="crewMoreInfo">
                    <div @click.stop="dialog = true">
                      <svg-icon data_iconName="ic-more"></svg-icon>
                    </div>

                    <v-dialog v-model="dialog" max-width="800">
                      <div class="crewModal gradient-border flex-column">
                        <div class="text-h5 text-center">
                          <p>Norman Normal</p>
                          <p>Yankong</p>
                        </div>
                        <div class="crewArtist d-flex flex-row mb-4">
                          <div
                            :class="
                              $vuetify.breakpoint.mobile ? 'ml-1 mr-2' : 'mx-4'
                            "
                          >
                            <img src="../assets/normannormal.jpg" />
                            <div class="crewLink">
                              <v-btn
                                href="https://normannormal.art/"
                                icon
                                small
                                class="website"
                              >
                                <svg-icon
                                  className="v0"
                                  data_iconName="ic-website"
                                ></svg-icon>
                              </v-btn>
                              <v-btn
                                href="https://www.instagram.com/norman.normal2/"
                                icon
                                small
                                class="instagram"
                              >
                                <svg-icon
                                  className="v0"
                                  data_iconName="ic-instagram-solid"
                                ></svg-icon>
                              </v-btn>
                            </div>
                          </div>
                          <div
                            :class="
                              $vuetify.breakpoint.mobile ? 'mr-1 ml-2' : 'mx-4'
                            "
                          >
                            <img src="../assets/yankong.jpg" />
                            <div class="crewLink">
                              <v-btn
                                href="https://www.instagram.com/yankong2020/"
                                icon
                                small
                                class="instagram"
                              >
                                <svg-icon
                                  className="v0"
                                  data_iconName="ic-instagram-solid"
                                ></svg-icon>
                              </v-btn>
                            </div>
                          </div>
                        </div>
                        <v-card-text>
                          An artist couple in Taipei jointly brought DOR into
                          life. They chose to use the rainbow element to bring
                          out the uniqueness and inclusiveness of the human soul
                          in their first collaboration.
                        </v-card-text>
                        <div @click="dialog = false" class="dialogClose">×</div>
                      </div>
                    </v-dialog>
                  </div>
                </v-img>
              </v-col>
              <v-col cols="6" md="3" class="crewItem">
                <v-img
                  class="crewBackground"
                  :class="$vuetify.breakpoint.mobile ? 'waiK' : 'waiKPc'"
                  src="../assets/glass_crew.png"
                >
                  <v-img
                    contain
                    class="Mbox3"
                    src="../assets/crew-2.png"
                  ></v-img>
                  <div class="crewInfo text-center mt-2">
                    <h5 class="strc">- ODEM T -<br />The Evangelist</h5>
                    <h6 class="cfff">
                      Founder of SPARK!. Internet Marketing. Social community
                      expert.
                    </h6>
                  </div>
                </v-img>
              </v-col>
              <v-col cols="6" md="3" class="crewItem">
                <v-img
                  class="crewBackground"
                  :class="$vuetify.breakpoint.mobile ? 'waiK' : 'waiKPc'"
                  src="../assets/glass_crew.png"
                >
                  <v-img
                    contain
                    class="Mbox3"
                    src="../assets/crew-3.png"
                  ></v-img>
                  <div class="crewInfo text-center mt-2">
                    <h5 class="strc">- A C -<br />The Enthusiast</h5>
                    <h6 class="cfff">
                      Co-Founder of SPARK!. Marketing professional. Crypto
                      Investor.
                    </h6>
                  </div>
                </v-img>
              </v-col>
              <v-col cols="6" md="3" class="crewItem">
                <v-img
                  class="crewBackground"
                  :class="$vuetify.breakpoint.mobile ? 'waiK' : 'waiKPc'"
                  src="../assets/glass_crew.png"
                >
                  <v-img
                    contain
                    class="Mbox3"
                    src="../assets/crew-4.png"
                  ></v-img>
                  <div class="crewInfo text-center mt-2">
                    <h5 class="strc">- H H -<br />The Alchemist</h5>
                    <h6 class="cfff">
                      Digital Artist and Web Developer. Love creativity and
                      programming.
                    </h6>
                  </div>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="sectionFAQ">
          <v-container>
            <h3
              :class="$vuetify.breakpoint.mobile ? 'ft30' : 'text-h3 mt-10'"
              class="cfff text-center sectionTitle"
            >
              <svg-icon
                v-if="$vuetify.breakpoint.mobile"
                className="logo_icon middle_svg mr-1"
                data_iconName="ic-faq"
              ></svg-icon>
              <svg-icon
                v-else
                className="v2 middle_svg"
                data_iconName="ic-faq"
              ></svg-icon>
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <div :class="$vuetify.breakpoint.mobile ? 'ma-3' : ''">
              <div v-for="(item, index) in quesList" :key="index">
                <div class="ques">
                  <i></i>
                  <div>{{ item.ques }}</div>
                </div>
                <div
                  class="answer ftw"
                  :class="$vuetify.breakpoint.mobile ? '' : 'answerBorder'"
                >
                  <div v-html="item.answer"></div>
                </div>
              </div>
            </div>
          </v-container>
        </div>
        <div v-if="!$vuetify.breakpoint.mobile" class="rightIcon">
          <img src="../assets/planet.png" alt="" />
        </div>
        <v-fab-transition>
          <v-btn
            v-show="isShow"
            @click="goPost"
            color="pink"
            dark
            fixed
            bottom
            right
            fab
          >
            <v-icon>mdi-rocket</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-col>
    </v-row>
    <v-dialog
      persistent
      v-model="showDialog"
      max-width="420"
      overlay-opacity="0.8"
    >
      <div class="gradient-border flex-column">
        <div>
          <div class="my-6 ftw ft16 text-center">Reward Claiming Launchpad</div>
          <v-divider
            style="border-color: #fff"
            dark
            class="mb-3 mx-5 cfff"
          ></v-divider>
          <div class="pa-3 text-center">
            <!-- <div class="ft14">You have 10 daughters</div> -->
            <div class="ft14">You are eligible for</div>
            <div class="wenAn ft12 ftw mt-2">{{ cliamObj.tips3 }}</div>
          </div>
          <div class="mx-5 mt-3 pb-6">
            <v-row>
              <v-col>
                <v-btn
                  @click="oneClickSell"
                  color="#fee08a"
                  class="tenetFFF pa-6"
                  block
                >
                  <span>CLAIM </span>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
        <div @click="showDialog = false" class="dialogClose">×</div>
      </div>
    </v-dialog>
    <loading :overlay="isLoading" />
  </div>
</template>

<script>
import loading from "../components/loading.vue";
import { ethers, utils } from "ethers";
import MetaMaskOnboarding from "@metamask/onboarding";
import { computBignumber, digitNum } from "../contract/util";
import { judgeUserOpenMetamask } from "../contract/initWeb3";
export default {
  name: "HelloWorld",
  components: { loading },
  inject: ["reload"],
  data: () => ({
    isShow: false,
    showDialog: false,
    isLoading: false,
    buyNum: 1,
    saledNftNum: 0, //售出数量
    salePrice: 0.05,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    quesList: [
      {
        ques: "HOW WILL DAUGHTERS OF RAINBOW BE LAUNCHED?",
        answer:
          "Join our Twitter, Discord for updates. All Phase I Daughters purchases will be made at daughtersofrainbow.com at launch. Please visit our opensea marketplace if sold out on our website.",
      },
      {
        ques: "WHAT ARE DAUGHTERS OF RAINBOW?",
        answer:
          "The Daughters of Rainbow is a 1,523-piece NFT project; the collaborative creative effort from an artist couple. One artist hand-painted 30 original daughters from portrait profiles collected from the streets of New York. The other then created 1,523 daughters in digital media art form -- each with its own distinct style.",
      },
      {
        ques: "WHAT IS THE RAINBOW ESSENCE?",
        answer:
          "The concept of the Daughters of Rainbow is anchored in the Rainbow Sea, which exists at the source of the Universe. All answers related to humans flow through the Rainbow Sea and manifest in the form of rainbow light. The artist hopes that NFTs in different forms can become virtual containers that capture this light -- the Rainbow Essence -- from the universe, storing the connection between humans and the Rainbow Sea, giving access to the answers to the source of life.",
      },
      {
        ques: "WHEN IS THE LAUNCH DATE?",
        answer: "Official Launch is at 13th Oct 2021 10am UTC",
      },
      {
        ques: "HOW MUCH DOES EACH DAUGHTERS OF RAINBOW COST IN PHASE I INITIAL LAUNCH?",
        answer:
          "Each DAUGHTERS in phase I will be minted at 0.05 ETH + Gas on minting day！",
      },
      {
        ques: "HOW TO OPEN THE BLIND-BOX AND REVEAL MY REAL DAUGHTER PORTRAITS?",
        answer:
          "Once you ﬁnd your daughter NFT in opensea in “My Proﬁle” in your “Account” area, press “Refresh Metadata” button on the top-right menu list. You will reveal the NFT. Please be updated through our twitter to the reveal time.",
      },
      {
        ques: "WHAT IS THE SMART CONTRACT ADDRESS FOR DOR?",
        answer:
          "This will be launched on Website and Twitter on the launch day!",
      },
      {
        ques: "WILL THERE BE A PRIVATE-SALE?",
        answer:
          "Private-sale date is at 11th Oct 10am UTC. We will make sure that active community members will be rewarded. Please keep updated through our  Discord/Twitter to join our private-sale whitelist.",
      },
      {
        ques: "WHAT IS DAUGHTERS OF ALIEN SERIES?",
        answer:
          "It is a special series unlocked when phase I daughters are sold with 30%. You can ﬁnd our super cool 44 pieces of Daughters of Alien series be listed with 0.07 ETH/ piece on Opensea.",
      },
      {
        ques: "WHAT ARE MIX-N-MATCH DAUGHTERS DROPS?",
        answer:
          "Mix-n-Match daughters are reward giveaways for our Phase I daughter holders.<p>- Holders of 5: receive a silver grade mix-n-match Daughters (5 designs with 10pc/each)</p><p>- Holders of 10: receive a gold grade mix-n-match Daughters (10 designs with 5 pc/each)</p>- Holders of 20: receive a rainbow grade mix-n-match Daughters (5 animated designs with 1 pc/each)",
      },
      {
        ques: "WHAT ARE RARE ANIMATED DAUGHTERS IN PHASE II?",
        answer:
          "They are 30 unique animated daughters NFT with 15 copies of each one. They will be listed on opensea with 0.15 ETH /piece. ",
      },
      {
        ques: "WHAT IS THE MOTHER IN PHASE III?",
        answer:
          "The Mother is the one who created all the daughters of rainbow. She is mysterious, mighty, and gorgeous. There will be 3 super rare Mother portraits with 10 copies each. Price will be bidding on opensea.",
      },
      {
        ques: "WHAT IF I DON’T HAVE A WALLET TO CONNECT?",
        answer:
          'To buy our NFT, you need an Ethereum wallet with ETHs and a metamask plug-in (or other common crypto wallet like Token Pocket as well) Here are the video tutorials to install a metamask wallet for example. You can search other related tutorial online that suit you more.<p><a href="https://www.youtube.com/watch?v=MfkqgXNPiHg&t=147s">https://www.youtube.com/watch?v=MfkqgXNPiHg&t=147s</a> English Toturial</p><p>When the sales period is open, you can go to our homepage and click the button that says ‘MINT’. When you click to buy, you’ll receive a metamask pop-up showing the price and estimated gas fee. You need to reserve some ETH to pay the gas fee as network transaction fee.</p><p>We recommend our users to wait until the price goes down. In order to check the price of the gas fee, please check via <a href="https://ethereumprice.org/gas/">https://ethereumprice.org/gas/</a> when gas price goes down relatively.</p>',
      },
    ],
    cliamList: [
      {
        type: "silver",
        index: 1,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A Mix & Match Silver Grade Daughter -",
      },
      {
        type: "gold",
        index: 2,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A Mix & Match Gold Grade Daughter -",
      },
      {
        type: "rainbow",
        index: 3,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A Mix & Match Rainbow Grade Daughter -",
      },
      {
        type: "ebible",
        index: 4,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A Daughter E-bible -",
      },
      {
        type: "random",
        index: 5,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A Mix & Match Daughter -",
      },
      {
        type: "m3d",
        index: 6,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A 3D Mother NFT -",
      },
      {
        type: "airdrops",
        index: 7,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A Limited Daughter NFT -",
      },
      {
        type: "spark",
        index: 8,
        value: false,
        tips1: "Reward Claiming Launchpad",
        tips2: "You are eligible for",
        tips3: "- A SPARK! Token NFT -",
      },
    ],
    bgStyle: {
      width: null,
      "--x-offset": null,
    },
    local_address: "",
    image: {
      width: 4050,
      height: 1027,
    },
    chainId: 0,
    cliamObj: {},
    nonce: 0,
    masterAddr: "",
    dialog: false,
  }),
  created() {
    const fun = () => {
      const clientHeight = 400;
      const xOffset = parseInt(
        (this.image.width / this.image.height) * clientHeight
      );
      this.bgStyle["--x-offset"] = xOffset + "px";
      this.bgStyle.width = document.body.clientWidth + xOffset + "px";
    };
    window.onresize = () => {
      fun();
      // 重置 animation 保证变量加载
      this.$refs.bg.classList.remove("animation");
      setTimeout(() => {
        this.$refs.bg.classList.add("animation");
      }, 100);
    };
    fun();
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    let address = window.sessionStorage.getItem("address");
    if (address) {
      this.isLoading = true;
      ethereum.on("chainChanged", (res) => {
        if (parseInt(res) != 1) {
          this.$toast({ text: "current RPC node is " + netInfo.name });
          this.reload();
        }
      });

      const { address, chainId, provider, masterAddr, masterInstance } =
        await judgeUserOpenMetamask();
      let netInfo = await provider.getNetwork();
      if (netInfo.name != "homestead") {
        this.$toast({ text: "Switch to Ethereum Mainnet Network！" });
      }
      this.local_address = address;
      window.sessionStorage.setItem("address", this.local_address);
      this.nonce = await provider.getTransactionCount(this.local_address);
      console.info(this.nonce);
      this.gasPrice = await provider.getGasPrice();
      this.chainId = chainId;
      let ethBalance = await provider.getBalance(address);
      this.ethBalance = ethers.utils.formatEther(ethBalance);
      this.tenetProvider = provider;
      this.masterInstance = masterInstance;
      this.masterAddr = masterAddr;

      await this.initNftInfo();
    }
  },
  methods: {
    async connectWallet() {
      try {
        this.isLoading = true;
        ethereum.on("chainChanged", (res) => {
          if (parseInt(res) != 1) {
            this.$toast({ text: "current RPC node is " + netInfo.name });
            this.reload();
          }
        });

        const { address, chainId, provider, masterAddr, masterInstance } =
          await judgeUserOpenMetamask();
        let netInfo = await provider.getNetwork();
        if (netInfo.name != "homestead") {
          this.$toast({ text: "Switch to Ethereum Mainnet Network！" });
        }
        this.local_address = address;
        window.sessionStorage.setItem("address", this.local_address);
        this.nonce = await provider.getTransactionCount(this.local_address);
        console.info(this.nonce);
        this.gasPrice = await provider.getGasPrice();
        this.chainId = chainId;
        let ethBalance = await provider.getBalance(address);
        this.ethBalance = ethers.utils.formatEther(ethBalance);
        this.tenetProvider = provider;
        this.masterInstance = masterInstance;
        this.masterAddr = masterAddr;

        await this.initNftInfo();
      } catch (error) {
        this.isLoading = false;
        this.$toast({
          text: "Please install Metamask on Chrome plugin or Metamask APP.",
        });
        if (this.$vuetify.breakpoint.mobile) {
          const u = navigator.userAgent;
          const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
          if (isiOS) {
            window.open(
              "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
            );
          } else {
            window.open(
              "https://play.google.com/store/apps/details?id=io.metamask&hl"
            );
          }
        } else {
          const onboarding = new MetaMaskOnboarding();
          setTimeout(() => {
            onboarding.startOnboarding();
          }, 1000);
        }
      }
    },
    //初始化数据
    async initNftInfo() {
      //查询预售价格
      let salePrice = await this.masterInstance.salePrice();
      this.salePrice = ethers.utils.formatEther(salePrice);
      console.info(this.salePrice);
      //查询已售出的数量
      let saledNftNum = await this.masterInstance.getDaughterCount();
      this.saledNftNum = parseInt(saledNftNum);
      //查询全部数量
      // 获取用户是否可领取奖励
      let userClaim = await this.masterInstance.canClaim(this.local_address);
      console.info(userClaim, "userClaim");
      this.cliamList.forEach((m) => {
        this.$set(m, "value", userClaim[m.type]);
      });
      let arr = this.cliamList.filter((item) => {
        return item.value == true;
      });
      if (arr.length > 0) {
        this.showDialog = true;
        this.cliamObj = arr[arr.length - 1];
      }
      this.isLoading = false;
    },
    //购买nft
    async mintNft() {
      try {
        this.isLoading = true;
        let b = ethers.BigNumber.from(this.buyNum),
          val = this.salePrice * this.buyNum * 1e18 + "";
        console.info(val);
        //
        let result = await this.masterInstance.mint(b, { value: val });
        this.showResult(result, "NFT purchase completed");
      } catch (error) {
        console.info(error);
      }
    },
    async showResult(v, m) {
      let recepit = await v.wait();
      this.$toast({ text: m });

      if (recepit) {
        setTimeout(() => {
          this.reload();
        }, 1000);
      }
      this.isLoading = false;
    },
    async oneClickSell() {
      this.showDialog = false;
      this.isLoading = true;
      try {
        let b = ethers.BigNumber.from(Number(this.cliamObj.index));
        let result = await this.masterInstance.claim(b);
        this.showResult(result, "CLAIM completed ");
      } catch (error) {
        this.isLoading = false;
      }
    },
    handleScroll(e) {
      var dis =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      dis > 30 ? (this.isShow = true) : (this.isShow = false);
    },
    goPost() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      let step = distance / 30; //每步的距离
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 10);
        }
      })();
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes animate_bg {
  0%,
  100% {
    background-position: 0%, center;
  }

  50% {
    background-position: 100%, center;
  }
}
@keyframes bg {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--x-offset)));
  }
}
.animation {
  animation: bg 20s linear infinite;
}
$bg-img: "../assets/h5Swiper.png";
/* bg */
#bg {
  transform: translate3d(0, 0, 0);
  background: url(#{$bg-img}) top left;
  background-repeat: repeat-x;
  background-size: var(--x-offset) auto, auto;
  height: 401px;
}
:root {
  --border-width: 1px;
}

.gradient-border {
  position: relative;
  display: flex;
  max-width: 420px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: Lato, sans-serif;
  // text-transform: uppercase;
  color: white;
  background: #222;
  border-radius: 15px;
  padding: 6%;
}

.gradient-border::after {
  content: "";
  position: absolute;
  top: calc(-1 * 2px);
  left: calc(-1 * 2px);
  z-index: -1;
  width: calc(100% + 2px * 2);
  height: calc(100% + 2px * 2);
  background: linear-gradient(
    60deg,
    #5f86f2,
    #a65ff2,
    #f25fd0,
    #f25f61,
    #f2cb5f,
    #abf25f,
    #5ff281,
    #5ff2f0
  );
  background-size: 300% 300%;
  background-position: 0 50%;
  border-radius: calc(2 * 8px);
  animation: moveGradient 4s alternate infinite;
}

.h5-page {
  height: 100%;
  background: url("../assets/h5-bg.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.rightIcon {
  position: absolute;
  right: 0;
  bottom: -10px;
}
.star {
  background-color: #6d5cb0;
}
// .pc-page {
//     height: 100%;
//     background: url('../assets/bg.png') no-repeat;
//     background-size: cover;
// }
.justfiy-around {
  justify-content: space-between;
}
.middle {
  vertical-align: middle;
}
.Mbox {
  position: absolute;
  top: 30px;
  width: 500px;
}
.m0a {
  margin: 0 auto;
}
.mboxPc {
  margin: 35px auto;
  width: 300px;
  height: 350px;
}
.mboxH5 {
  margin: 30px auto;
  width: 210px;
}
.Mbox2 {
  position: absolute;
  top: 35px;
  left: 50px;
  width: 200px;
  height: 250px;
}
.juc {
  justify-content: center;
}
.pcFlexC {
  justify-content: center;
  align-items: center;
}
.w25 {
  width: 25px;
}
.w50 {
  width: 50px;
}
.wenAn {
  color: rgb(250, 234, 10);
}
.bg {
  background-color: #1e1e1ecc !important;
}
.ques {
  border: 3px solid #ffffff;
  border-radius: 12px;
  font-family: Roboto;
  font-weight: bold;
  text-align: left;
  font-size: 14px;
  margin: 0 10px;
  display: flex;
  padding: 10px;
  color: #ffcd05;
  & i {
    display: block;
    width: 8px;
    height: 8px;
    margin-top: 5px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #ffcd05;
  }
  & div {
    flex: 1;
  }
}
.up {
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #ded5ff;
}
.inputNum {
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #000;
  font-weight: 700;
}
.answer {
  margin: 10px;
  padding: 10px 15px;
  color: #fff;
  line-height: 1.2;
}
.answerBorder {
  border-right: 3px solid #cbcbcb;
  border-left: 3px solid #cbcbcb;
  margin: 20px 40px;
}
.strc {
  color: rgb(255 205 5);
  font-weight: 700;
}
.timeC {
  color: #f44844;
}
.mang {
  position: relative;
  padding: 0 10px;
  background: url("../assets/mang-2.png") no-repeat;
  background-size: 100% 100%;
}
.countDown {
  color: #fff;
  & span {
    display: inline-block;
    margin-right: 10px;
  }
}
.l12 {
  line-height: 1.3;
}
.inputText {
  position: absolute;
  right: 5%;
  top: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  justify-items: center;
  & > div:nth-child(1) {
    & > div:nth-child(1) {
      text-align: center;
      // height: 20px;
      background-color: rgb(221 212 255);
    }
    & > div:nth-child(2) {
      text-align: center;

      background-color: #fff;
    }
    & > div:nth-child(3) {
      // height: 20px;
      text-align: center;
      background-color: rgb(221 212 255);
    }
  }
}
.operateBtn {
  height: 4.5rem;
  line-height: 3;
  user-select: none;
}
.mintBtn {
  text-align: center;
  background: #aa99ea;
}
.up:active {
  background: #d4cafc;
}
.mintBtn,
.up {
  cursor: pointer;
}
.waiK {
  // width: 179px;
  // height: 336px;
  width: 90%;
  height: 90%;
  min-height: 350px;
  margin: 0 auto;
  & .Mbox3 {
    // margin: 45px 0 0 10px;
    // width: 150px;
    // height: 160px;
    margin: 10% auto 6% auto;
    width: 70%;
    height: auto;
  }
}
.waiKPc {
  // width: 289px;
  // height: 466px;
  width: 90%;
  height: auto;
  min-height: 97%;
  margin: 0px auto;
  & .Mbox3 {
    // margin: 55px 0 0 10px;
    // width: 250px;
    // height: 280px;
    margin: 40px auto 15px auto;
    width: 70%;
    height: auto;
  }
}
.ft30 {
  font-size: 30px;
}
.hasMinted {
  // height: 55px;
  // line-height: 50px;
  line-height: 24px;
  text-align: center;
  border: 2px solid #b1b7ca;
  border-radius: 12px;
  font-weight: 800;
  font-size: 18px;
  color: #fff;
  padding: 15px;
  & > span {
    margin-right: 10px;
    color: #f44844;
  }
}
.deadLine {
  color: #fff;
  line-height: 2;
  font-weight: 700;
  text-align: center;
}
.infoC {
  padding: 0 20px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  text-align: left;
}
.cfff {
  color: #fff;
}
.flex1 {
  flex: 1;
}
.flex5 {
  flex: 0.5;
}
.flex8 {
  flex: 0.8;
}
.roadMap {
  background: url("../assets/h5Color.png") no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 300px;
}

// * add
#bg {
  position: relative;
}
#bg::before {
  content: "";
  background: linear-gradient(
    0deg,
    rgb(179 25 80 / 50%),
    rgb(255 255 255 / 0%)
  );
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: -2px;
}
.pc-page .container:not(.header) {
  max-width: 1150px;
}
.sectionMint {
  background: url("../assets/star_bg-mint.jpg") no-repeat;
  background-size: cover;
  background-position-y: 30%;
  width: 100%;
  height: auto;
  padding-top: 2%;
  & .container.header {
    width: 100%;
    max-width: 100%;
    position: relative;
    z-index: 1;
  }
  & .mint {
    padding: 8% 0;
  }
  & .wallet {
    padding-right: 0;
    & .v-btn {
      background: linear-gradient(180deg, #b31950, #ff2e73);
      padding: 6% 12%;
      height: auto;
    }
  }
  & .mintBtn {
    position: relative;
    z-index: 1;
  }
}

.socialItem {
  margin: 0 15px;
}

.sectionLaunch {
  background: url("../assets/star_bg-plan.jpg") no-repeat;
  background-size: cover;
  background-position-y: 30%;
  width: 100%;
  height: auto;
  padding: 4%;
}

.roadmapiItem > div:nth-child(1) {
  margin: 10px;
}
.dorTitle {
  font-family: "Eras ITC", "Eras Light ITC", sans-serif;
  font-weight: bold;
  margin-bottom: 5%;
  // & svg {
  //     margin-top: -12px;
  // }
}
.sectionTitle {
  font-weight: bold;
  margin-bottom: 3%;
  line-height: 2rem;
  & svg {
    margin-top: -12px;
  }
}
.sectionCrew {
  background: url("../assets/star_bg-crew.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 100%;
  width: 100%;
  height: auto;
  padding-bottom: 5%;
  & .crewInfo {
    margin: 0 15%;
  }
  & h5 {
    line-height: 15px;
    margin-bottom: 8px;
  }
  & h6 {
    line-height: 15px;
  }
}

.crewItem > div {
  transition: 0.2s ease;
  position: relative;
}
.crewItem:first-child:hover > div {
  background: rgb(0 0 0 / 30%);
  transition: 0.2s ease;
}
.crewItem:hover .crewMoreInfo {
  opacity: 0.5;
  transition: 0.2s ease;
}
.crewMoreInfo {
  display: inline-block;
  position: absolute;
  bottom: 2%;
  right: 4%;
  cursor: pointer;
  opacity: 0;
  transition: 0.2s ease;
}
.crewItem .crewMoreInfo:hover {
  opacity: 0.8;
  transition: 0.2s ease;
}
.crewMoreInfo svg {
  width: 20px;
  height: 20px;
}

.crewModal {
  background: #000;
  background-size: 230%;
  background-position: 92% 30%;
  text-align: center;
  position: relative;
}
.dialogClose {
  position: absolute;
  top: -3px;
  right: 12px;
  background: linear-gradient(
    80deg,
    #5f86f2,
    #a65ff2,
    #f25fd0,
    #f25f61,
    #f2cb5f,
    #abf25f,
    #5ff281,
    #5ff2f0
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 25px;
  min-width: auto;
  cursor: pointer;
}
.crewDialog {
  max-width: 800px;
}
.crewModal.gradient-border {
  max-width: 800px;
  padding: 6% 13%;
}
.crewModal a {
  text-shadow: none;
}
.crewModal .text-h5 p {
  font-weight: 300;
}
.crewModal .text-h5 p:first-child {
  position: relative;
}
.crewModal .text-h5 p:first-child::before,
.crewModal .text-h5 p:first-child::after {
  content: "";
  width: 20px;
  height: 1px;
  background: #fff;
  position: absolute;
  bottom: -30%;
  left: 50%;
  border-radius: 8px;
}
.crewModal .text-h5 p:first-child::before {
  transform: translateX(-50%) rotateZ(45deg);
}
.crewModal .text-h5 p:first-child::after {
  transform: translateX(-50%) rotateZ(-45deg);
}
.crewArtist img {
  width: 100%;
}
.crewLink a {
  position: relative;
}
.crewLink a::after {
  content: "";
  color: #333;
  font-size: 12px;
  padding: 0 5px;
  position: absolute;
  bottom: -15px;
  z-index: 1000;
  background: #fff;
  transform: scale(0);
  transition: 0.2s ease;
}
.crewLink a.website::after {
  content: "website";
}
.crewLink a.instagram::after {
  content: "instagram";
}
.crewLink a:hover::after {
  transform: scale(0.7);
}

.sectionFAQ {
  background: url("../assets/star_bg-faq.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 0%;
  width: 100%;
  height: auto;
  padding-bottom: 10%;
  margin-top: -2px;
}
@media screen and (min-width: 1025px) {
  .crewModal .text-h5 p:first-child::before,
  .crewModal .text-h5 p:first-child::after {
    height: 2px;
    bottom: -50%;
  }
  .crewModal .text-h5 p {
    font-size: 2rem;
    margin-bottom: 15%;
  }
  .crewModal .v-card__text {
    font-size: 1rem;
  }
}
@media screen and (max-width: 1024px) {
  .sectionCrew {
    padding: 0 3%;
  }
}
@media screen and (max-width: 640px) {
  .hasMinted {
    & > span {
      display: block;
      margin-right: 0;
    }
  }
  .sectionMint .mint {
    padding: 12px;
  }
  .crewItem {
    margin-bottom: 10%;
  }
  .waiK {
    min-height: 105%;
  }
  .crewModal {
    background-size: 350%;
    background-position: 92% 80%;
  }
  .crewModal.gradient-border {
    padding: 6%;
  }
  .crewItem:first-child:hover > div {
    background: none;
  }
  .crewMoreInfo,
  .crewItem:hover .crewMoreInfo {
    opacity: 0.6;
  }
  .crewMoreInfo svg {
    width: 16px;
    height: 16px;
  }
  .crewModal .v-card__text {
    font-size: 12px;
    line-height: 16px;
  }
  .crewModal .dialogClose {
    top: -1px;
    right: 3%;
    font-size: 20px;
  }
  .sectionTitle {
    margin: 6% 0;
  }
  .sectionMint,
  .sectionCrew,
  .sectionFAQ {
    background: none;
  }
  .h5-page {
    padding-bottom: 25%;
  }
}
@media screen and (max-width: 500px) {
  .crewModal {
    background-size: 320%;
    background-position: 30% 80%;
  }
}

.glow,
.glow > div {
  position: relative;
}
.glow {
  z-index: 0;
}
.glow > div {
  z-index: 10;
}
.glow::before,
.glow::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 100%;
}
.glow::before {
  filter: blur(10vw);
  background: rgb(191 160 255 / 70%);
  animation: animateGlowWhite 3s alternate ease infinite;
}
.glow::after {
  /* transform: scale(0.75); */
  background: linear-gradient(
    270deg,
    #f172d0,
    #0043ff,
    #7e0fff,
    #f172d0,
    #0043ff,
    #7e0fff
  );
  background-size: 200% 200%;
  -webkit-animation: animateGlow 20s alternate ease infinite;
  animation: animateGlow 20s alternate ease infinite;
}
@keyframes animateGlowWhite {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes animateGlow {
  0% {
    background-position: 0% 50%;
    filter: blur(10vw);
    transform: rotate(0deg) scale(0.9);
  }
  30% {
    background-position: 100% 50%;
    filter: blur(5vw);
    transform: rotate(180deg) scale(0.6);
  }
  50% {
    background-position: 0% 50%;
    filter: blur(13vw);
    transform: rotate(0deg) scale(1.1);
  }
  70% {
    background-position: 100% 50%;
    filter: blur(8vw);
    transform: rotate(180deg) scale(0.7);
  }
  100% {
    background-position: 0% 50%;
    filter: blur(10vw);
    transform: rotate(0deg) scale(0.9);
  }
}
@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
</style>

<style>
.sectionCrew .crewBackground > .v-image__image {
  background-size: 100% 100%;
}
</style>
