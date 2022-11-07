// 通用配置
const globalConfig = {
    socialLinks: {
        twitter: 'https://twitter.com/0xMatrixMarket',
        medium: 'https://medium.com/matrix-markt',
        discord: 'https://discord.gg/TEpebqaJJF'
    },
    // 对应s3链接 https://s3.console.aws.amazon.com/s3/buckets/marketplace-nfts-media?region=ap-northeast-1&tab=objects
    // cloudfront链接 https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=ap-northeast-1#/distributions/EI3SX5ULOI2G
    cloudflareAssets: {
        defaultGradientImg: "https://media.nft.matrixmarket.xyz/common/defaultGradientImg.png",
        matrixLogoImg: 'https://media.nft.matrixmarket.xyz/common/matrixLogoImg.png',
        flowNiaBannerBg: 'https://media.nft.matrixmarket.xyz/flowNia/flowNiaBannerBg.png',
        defaultProfileBanner: "https://media.nft.matrixmarket.xyz/common/defaultProfileBanner.png",
        hotCollectionCardGradientImg: 'https://media.nft.matrixmarket.xyz/common/hotCollectionCardGradientImg.png',
        flowNiaVideo: 'https://media.nft.matrixmarket.xyz/flowNia/flownia.mp4',
        flowNiaVideoPoster: 'https://media.nft.matrixmarket.xyz/flowNia/flownia-video-poster.png',
        flowNiaARVideo: 'https://media.nft.matrixmarket.xyz/flowNia/AR-effect-rare-2.mp4',
        flowNiaItemLogo: 'https://media.nft.matrixmarket.xyz/flowNia/flownia_item_logo.png',
        flowNiaSynthesisSmallCardImg: 'https://media.nft.matrixmarket.xyz/flowNia/synthesis_small_card.png',
        matrixLogoNew: 'https://media.nft.matrixmarket.xyz/common/logo.png',
        bl0xVideo: 'https://media.nft.matrixmarket.xyz/bl0x/Matrix+Launch+Header+animation.mp4',
        bl0xVideoPoster: 'https://media.nft.matrixmarket.xyz/bl0x/Bl0x-video-poster.png'
    }
}
export default globalConfig;