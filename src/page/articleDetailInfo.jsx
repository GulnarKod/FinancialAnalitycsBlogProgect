import React from "react";
import "./totalStyles.css"
import AnalystsComment from "./analystsComment";

const ArticleDetailInfo = () => {
    return (
        <div className="detail_articl_container">
            <h2 className="detail_article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            <img className="detail_item_img" src="https://images.mktw.net/im-299272" alt="ddsdd"></img>
            <p className="detail_article_text">Some economically-sensitive stocks have underperformed the broader market,
                while the U.S. dollar has risen. That combination makes some nervous about those stocks, but they needn’t worry.
                nIndustrials and banks, two highly cyclical sectors, are marginally underperforming the border market since January 6, the date that marked a reversal of the Dollar’s downtrend. The Industrial Select Sector SPDR Fund (XLI) has underperformed the S&P 500 by almost 4 percentage points since January 6, while the SPDR S&P Bank ETF (KBE) has underperformed by less than a tenth of a percentage point. Since that date, the U.S. Dollar Index (DXY) is up 1.6%.\r\n\r\nUsually, when the dollar rises, equities in general perform poorly because global investors are moving into safe haven assets as they see the global economic outlook weakening. “If USD were to show a notable strengthening this year, that would, to some extent, go against our bullish equity market call,” wrote JPMorgan global equity strategists in a note. That certainly doesn’t set up well for cyclical stocks.\r\n\r\nBut this moment is different; the dollar’s strength isn’t a refection of global risk aversion from investors, but rather a U.S. economy expected to perform handsomely relative to other countries for the longer-term, even as all economies rebound from the pandemic. Also, U.S. interest rates are expected to rise faster than in other countries over the next several years, making owning the greenback more attractive versus other currencies. That’s also consistent with the theme of U.S. economic growth outperformance.\r\n\r\nThis all lends itself to strong performance for cyclical stocks. “Weakness in cyclicals due to Dollar gains represent buying opportunities assuming USD strength is based on improving growth prospects,” wrote Dennis DeBusschere, head of portfolio strategy research at Evercore in a note. “Don’t dump cyclicals because the dollar is strengthening,” Yung Yu Ma, chief investment strategist at BMO Wealth Management told Barron’s. “Industrials and financials will do well.”\r\n\r\nGiven the positions of DeBusschere and Ma, some might be scratching their heads at why those cyclicals aren’t top performers this year. Actually, they have been spectacular outperformers since September 23, the start of a fresh rally in stocks and a move into assets that benefit with a strengthening economy. The Industrial Select Sector SPDR Fund is up 19%, roughly in line with the S&P 500’s gain. The SPDR S&P Bank ETF is up 65%. Notably, energy stocks, as seen by the Energy Select Sector SPDR Fund (XLE), is up 46% since that date. Ma says cyclical stocks are taking a breather, while other forgotten areas of the market catch up.\r\n\r\nBelieving in the global economys upturn means
                believing in cyclicals — regardless of what the dollar does.</p>
            <AnalystsComment />

        </div>
    )
}
export default ArticleDetailInfo;