import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import StyledTimeline from "../src/components/Timeline";
import { CSSReset } from "../src/CSSReset";

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://www.github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ playlists }) {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {playlists[playlistName].map((video) => (
                <a href={video.url}>
                  <img src={video.thumb} />
                  <span>{video.title}</span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function HomePage() {
  return (
    <>
      <CSSReset />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu></Menu>
        <Header></Header>
        <Timeline playlists={config.playlists}></Timeline>
      </section>
    </>
  );
}

export default HomePage;
