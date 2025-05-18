import './style.css';

export const SelectedSeat = ({ number }) => {
  return (
    <>
      <div className="selected-seat container">
        <h2>Vaše sedadlo</h2>
        <svg className="seat seat--auto" viewBox="0 0 100 100" role="button">
          <rect
            className="seat__rect"
            width="80"
            height="80"
            x="14"
            y="10"
            rx="15"
            ry="15"
          />
          <path
            className="seat__path"
            d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
          />
          <text className="seat__text" x="55" y="65">
            {number}
          </text>
        </svg>
      </div>

      {/* <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
          <div className="seat-row">
            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                33
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                29
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                25
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                21
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                17
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                13
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                9
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                5
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                1
              </text>
            </svg>
          </div>

          <div className="seat-row">
            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                34
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                30
              </text>
            </svg>

            <svg
              className="seat seat--selected"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                26
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                22
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                18
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                14
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                10
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                6
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                2
              </text>
            </svg>
          </div>

          <div className="seat-row">
            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                35
              </text>
            </svg>
          </div>

          <div className="seat-row">
            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                36
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                31
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                27
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                23
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                19
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                15
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                11
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                7
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                3
              </text>
            </svg>
          </div>

          <div className="seat-row">
            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                37
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                32
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                28
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                24
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                20
              </text>
            </svg>

            <svg className="seat" viewBox="0 0 100 100" role="button">
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                16
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                12
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                8
              </text>
            </svg>

            <svg
              className="seat seat--occupied"
              viewBox="0 0 100 100"
              role="button"
            >
              <rect
                className="seat__rect"
                width="80"
                height="80"
                x="14"
                y="10"
                rx="15"
                ry="15"
              />
              <path
                className="seat__path"
                d="M 65,10 H 25 C 5,35 5,65 25,90 H 65"
              />
              <text className="seat__text" x="55" y="65">
                4
              </text>
            </svg>
          </div>
        </div>
      </div> */}
    </>
  );
};
