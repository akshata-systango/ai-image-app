import axios from "axios";
import * as cheerio from "cheerio";

export const POST = async (req: Request) => {
  try {
    const { url } = await req.json();
    const URI = new URL(url);
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let title, price, image;

    // Example selectors for Amazon
    if (URI?.href && URI.origin.includes("https://www.amazon.")) {
      title = $("#productTitle").text().trim();
      price = $("#corePriceDisplay_desktop_feature_div .a-price-whole")
        .text()
        .trim();
      image = $("#landingImage").attr("src");
    } else {
      // Default fallback
      title = $(".fhfLdV").text().trim();
      price = $(".biMVPh").text().trim();
      image = $(".iEMJCd img").attr("src");
    }

    return new Response(JSON.stringify({ title, price, image }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to scrape product details" }),
      { status: 500 }
    );
  }
};
