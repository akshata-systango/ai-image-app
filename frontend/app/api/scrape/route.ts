import axios from 'axios';
import * as cheerio from 'cheerio';

export const POST = async (req: Request) => {
  try {
    const { url } = await req.json();
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Example selectors for Amazon
    const title = $('#productTitle').text().trim();
    const price = $('#corePriceDisplay_desktop_feature_div .a-price-whole').text().trim();
    const image = $('#landingImage').attr('src');

    return new Response(
      JSON.stringify({ title, price, image }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to scrape product details' }), { status: 500 });
  }
}
