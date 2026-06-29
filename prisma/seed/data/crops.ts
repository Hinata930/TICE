export const crops = [
  {
    name: "tomato",
    displayName: "トマト",

    growTime: 60,

    seedPrice: 0,

    bSellPrice: 1,
    aSellPrice: 2,
    sSellPrice: 5,

    bHarvestExp: 2,
    aHarvestExp: 3,
    sHarvestExp: 4,

    waterScore: 10, // 水やりでスコアが10増える。パークでこれが増えるかも?

    quality: [
      {
        minScore: 0,
        bRate: 100,
        aRate: 0,
        sRate: 0,
      }, // 0~9はbしかでない
      {
        minScore: 10,
        bRate: 30,
        aRate: 60,
        sRate: 10,
      }, // 10~19はb,a,sそれぞれ30%,60%,10%でる
      {
        minScore: 20,
        bRate: 0,
        aRate: 60,
        sRate: 40,
      }, // 20以上はa,sそれぞれ60%,40%の確率どぇでる
    ],
  },

  {
    name: "potato",
    displayName: "じゃがいも",

    growTime: 180,

    seedPrice: 2,

    bSellPrice: 10,
    aSellPrice: 15,
    sSellPrice: 30,

    bHarvestExp: 10,
    aHarvestExp: 12,
    sHarvestExp: 30,

    waterScore: 10,

    quality: [
      {
        minScore: 0,
        bRate: 100,
        aRate: 0,
        sRate: 0,
      }, // 0~9はbしかでない
      {
        minScore: 10,
        bRate: 20,
        aRate: 70,
        sRate: 10,
      }, // 10~19はb,a,sそれぞれ20%,60%,20%でる
      {
        minScore: 20,
        bRate: 0,
        aRate: 60,
        sRate: 40,
      }, // 20以上はa,sそれぞれ60%,40%の確率どぇでる
    ],
  },
]