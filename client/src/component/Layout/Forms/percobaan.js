{/* <div className="Panel-Body">
            <div className="Chat-Login-Area">
              <ul className="chat-history">
                {data &&
                  looping.map((index, key) =>
                    index.guest_id !== null ? (
                      <li key={key}>
                        <div className="Message-data">
                          <span>{index.guest.name}</span>
                          <i className="online">
                            <AiOutlineClockCircle
                              style={{ fontSize: "17px" }}
                            />
                          </i>
                          <Moment
                            format="YYYY/MM/DD HH:mm"
                            className="message-data-time"
                          >
                            {index.created_at}
                          </Moment>
                        </div>
                        <div className="message my-message">
                          {index.content}
                        </div>
                      </li>
                    ) : (
                      <li className="clearfix">
                        <div className="Message-data align-right">
                          <Moment
                            format="YYYY/MM/DD HH:mm"
                            className="message-data-time"
                          >
                            {index.created_at}
                          </Moment>
                          &nbsp;
                          <i className="online">
                            <AiOutlineClockCircle
                              style={{ fontSize: "17px", color: "red" }}
                            />
                          </i>
                          &nbsp;
                          <span>{index.user.name}</span>
                        </div>
                        <div className="message other-message float-right">
                          {index.content}
                        </div>
                        <iframe
                          style={{
                            border: "0",
                            width: "100%",
                            height: "100%",
                          }}
                          src="http://emailyounow.com/ab/embed/9unw9ypg2tbwz1l2lrkd"
                        ></iframe>
                      </li>
                    )
                  )}
              </ul>
            </div>
            <form className="Chat-Area " onSubmit={this.handleSubmit}>
              <input
                name="content"
                onChange={this.contentOnChange}
                className="chat-input-box-LC col-9"
                type="text"
                placeholder="Masukan Pesan anda"
              />
              <button
                type="submit"
                className="btn btn-primary Btnn col-3"
                disabled={content.length < 1}
                value={content}
              >
                <p>Send</p>
              </button>
            </form>
          </div> */}

          <div className="Pembungkus-Tab">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="flex-row Header-Menu-Btn "
            variant="pills"
          >
            
            <Tab eventKey="home">
                    <p>tes</p>
            </Tab>
            <Tab eventKey="profile" title="Profile"></Tab>
            <Tab eventKey="contact" title="Contact"></Tab>
            
          </Tabs>
        </div>
          



          