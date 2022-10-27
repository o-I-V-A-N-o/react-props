import './Listing.css';
import Json from './etsy.json';

function Listing(props) {
  
  const list = props.items;

  console.log(list);
  
  const listitem = list.map((item) => (
    item.state != "removed" ? (
      <div class="item">
        <div class="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt="image"/>
          </a>
        </div>
        <div class="item-details">
          <p class="item-title">
            {item.title.length > 50 ?
              item.title.substr(0, 50) + "…"
              : item.title
            }
          </p>
          <p class="item-price">
            {item.currency_code == "USD" ? "$" + item.price
              : item.currency_code == "EUR" ? "€" + item.price
                : item.price + " GBP"
            }
          </p>
          {item.quantity <= 10 ?
            <p class="item-quantity level-low">{item.quantity} left</p>
            : item.quantity <= 20 ?
              <p class="item-quantity level-medium">{item.quantity} left</p>
              : <p class="item-quantity level-high">{item.quantity} left</p>
          }
          
        </div>
      </div>
    ) : null
  ));

  return (
    <div>
      <div class="item-list">
        {listitem}
      </div>
    </div>
  );
}

export default Listing;