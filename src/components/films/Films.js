import Stars from './Stars'

function Films() {
  return (
    <div>
      <div>
        <img alt="Постер" /> [Жанр]
      </div>
      <div>
        <ul class="card-body-stars u-clearfix">
          <li>
            <button>Нравится</button><button>Поделиться</button>
          </li>
          <li>
            SUPERMAN
          </li>
          <li>
            <Stars count={5} />,
          </li>
          <li>
            <button>Купить</button><a href="">Подробнее -></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Films;