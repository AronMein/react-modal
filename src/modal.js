/*
function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `

          <div class='back-modal' data-close="true">
              <div class='modal-window'>
                  <div class='modal-head'>
                      <span class="modal-title">${options.title}</span>
                  </div>
                  <div class="modal-body">
                      <div class="row">
                          <div class="center">
                                ${modal.closing = true ? 'kekek' : 'leleel'}
                          </div>
                      </div>
                  </div>
    ${modal.closing = true ?
            `<div class="modal-footer">
                <div class="rows">
                    <div class="left">
                        <div class="text">
                            Modal window blocked your!Modal window blocked your!Modal window blocked your!Modal window blocked your!
                              </div>
                        <div class="check">
                            <div class="col">
                                <input class="checkbox"
                                    type="checkbox"
                                    value="value" />
                            </div>
                            <div class="pod">Modal!</div>
                        </div>
                    </div>
                    <div class="button">
                        <button type="button" class="btn" data-close="true">Yes</button>
                    <button type="button" class="btn" Onclick=${` document.querySelector('.modal-footer').remove()`}>Nope</button>

                </div>
            </div>
            <div class="info">
                <br />
                Modal window blocked your!Modal window blocked your!Modal window blocked your!Modal window blocked your!Modal window blocked your!Modal window blocked your!
                      </div>
                  </div >` : ''}
              </div>
          </div>
`)
    document.body.appendChild(modal)
    return modal
}

let modall = function (options) {

    const hideModal = 200
    const modals = _createModal(options)
    let closing = false



    let modale = {
        open() {
            !closing && modals.classList.add('open')
            closing = true
        },
    /*
        clo() {
            document.querySelector('.modal-footer').remove()
            console.log(flag)
            flag = false
            console.log(flag)

        },
        close() {
            if (closing) {
                modals.classList.remove('open')
                modals.classList.add('hide')
                setTimeout(() => {
                    modals.classList.remove('hide')
                    closing = false
                }, hideModal)
            }
        }
    }


   
    setTimeout(() => {
        modale.open()
    }, hideModal)

    const listen = event => {
        if (event.target.dataset.close) {
            modale.close()
        }
    }

    modals.addEventListener('click', listen)

    return Object.assign(modale, {
        destroy() {
            modals.parentNode.removeChild(modals)
            modals.removeEventListener('click', listen)

        },

    })

}


const modale = modall({
    title: 'Modal window',
    nope: true,
    flag: false,
    content: `
<h4> Modal is working</h4>`
})*/
 
  const modals = () => {
      function createModal(triggerSelector, modalSelector, closeSelector, blockWindow) {


  

          const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              block = document.querySelector(blockWindow);
          const pot = document.querySelector('.checkbox');
              let open = true;

          function CloseModal() {  
              open = false;
                  console.log(pot.checked)
                  modal.classList.remove('open')
                  modal.classList.add('hide')
                  document.body.style.overflow = '';
                  setTimeout(() => {
                      modal.classList.remove('hide')
                  }, 200)
              close.removeEventListener('click', CloseModal)


          }

          function backModalClose(e) {
              if (open) {
                  if (e.target.dataset.close) {
                      modal.classList.remove('open')
                      modal.classList.add('hide')
                      document.body.style.overflow = '';

                      setTimeout(() => {
                          modal.classList.remove('hide')
                      }, 200)
                      modal.removeEventListener('ckick', backModalClose)
                      open = false;
              }

              }
          }

          function nope() {
              document.querySelector('.modalFooter').remove()
              block.removeEventListener('click', nope)
              open = false;
             
          }


          trigger.addEventListener('click', (e) => {
              if (e.target) {
                  e.preventDefault();
              }
              open = true;
              modal.classList.add('open');
              document.body.style.overflow = 'hidden';

              close.addEventListener('click', CloseModal);
              block.addEventListener('click', nope);
              modal.addEventListener('click', backModalClose);
          });

    }

      createModal('.butThree', '.modal', '.modal .one', '.modal .two');
  

}




export default modals;