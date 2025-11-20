---
layout: page
permalink: /repositories/
title: Repositories
description: A curated collection of my research and development projects, including work on computer vision, autonomous systems, hyperspectral imaging, and efficient deep learning models.
nav: true
nav_order: 4
---

A snapshot of my GitHub activity and repositories.

---

{% if site.data.repositories.github_users %}

### GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

{% endif %}

---

<!-- Stats + animation row -->
<div class="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">

  <div class="mb-3 mb-md-0">
    <a href="https://github.com/majidmanzoor170" target="_blank">
      <img
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=majidmanzoor170&show_icons=true&locale=en"
        alt="Majid GitHub Stats"
        style="max-width: 100%;"
      />
    </a>
  </div>

  <div class="text-center">
    <img
      src="https://raw.githubusercontent.com/rajput2107/rajput2107/master/Assets/Developer.gif"
      alt="Developer animation"
      style="max-width: 220px; border-radius: 12px;"
    />
  </div>

</div>

---

## 🧠 Tools & Technologies

<p align="center">
  <a href="https://www.python.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="40" height="40"/>
  </a>
  <a href="https://pytorch.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" width="40" height="40"/>
  </a>
  <a href="https://www.tensorflow.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" width="40" height="40"/>
  </a>
  <a href="https://keras.io/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png" alt="Keras" width="40" height="40"/>
  </a>
  <a href="https://pandas.pydata.org" target="_blank">
    <img src="https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png" alt="Pandas" width="40" height="40"/>
  </a>
  <a href="https://scikit-learn.org/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" width="40" height="40"/>
  </a>
  <a href="https://jupyter.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt="Jupyter" width="40" height="40"/>
  </a>
  <a href="https://www.docker.com/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="50" height="50"/>
  </a>
  <a href="https://www.linux.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" width="40" height="40"/>
  </a>
  <a href="https://git-scm.com/" target="_blank">
    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" width="40" height="40"/>
  </a>
</p>

---

{% if site.data.repositories.github_repos %}

## 📂 GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
