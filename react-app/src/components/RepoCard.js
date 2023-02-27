import React, { useState, useEffect } from 'react';

const RepoCard = ({ username, repo, clientId, clientSecret }) => {
  const apiRoot = 'https://api.github.com/repos';
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        let address = `${apiRoot}/${username}/${repo}`;
        if (clientId && clientSecret) {
          address += `?client_id=${clientId}&client_secret=${clientSecret}`;
        }
        const response = await fetch(address);
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchRepoData();
  }, [apiRoot, clientId, clientSecret, repo, username]);

  if (repoData) {
    const { owner, html_url, name, description, forks_count, watchers_count } = repoData;
    const avatarUrl = owner.avatar_url + '&s=48';
    const profileUrl = owner.html_url;
    const user = owner.login;
    const action = repoData.fork ? 'Forked By' : 'Created By';

    return (
      <div className="default-theme">
        <div className="github-card repo-card">
          <div className="header">
            <a className="avatar" href={profileUrl}>
              <img src={avatarUrl} alt={`${user} avatar`} />
            </a>
            <strong className="name">
              <a href={html_url}>{name}</a>
            </strong>
            <span>
              {action} <a href={profileUrl}>{user}</a>
            </span>
            <a className="button" href={html_url}>
              Star
            </a>
          </div>
          <div className="content">{description || 'No description'}</div>
          <ul className="status">
            <li>
              <strong>{forks_count}</strong> Fork
            </li>
            <li>
              <strong>{watchers_count}</strong> Stars
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
};

export default RepoCard;
