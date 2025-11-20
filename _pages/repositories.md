---
layout: page
permalink: /repositories/
title: Repositories
description: A curated collection of my research and development projects, including work on computer vision, autonomous systems, hyperspectral imaging, and efficient deep learning models. These repositories reflect my ongoing efforts in building lightweight, real-time, and deployable AI systems.
nav: true
nav_order: 4
---

<!-- Hero / Intro section -->
<div class="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">

  <div class="flex-grow-1 me-md-4">
    <h2 class="mb-2">Hi there, I'm <strong>Majid Manzoor</strong> 👋</h2>
    <p class="mb-2">
      I enjoy building practical AI systems for <strong>computer vision</strong>, <strong>autonomous systems</strong>, and
      <strong>lightweight deep learning</strong>. Most of my work focuses on
      <em>efficient, deployable models</em> for real-world scenarios such as disaster response,
      remote sensing, and multi-agent robotics.
    </p>
    <p class="mb-0">
      Below is a collection of my GitHub activity and repositories – including research code,
      experiments, and open-source tools I maintain or contribute to.
    </p>
  </div>

  <div class="mt-3 mt-md-0 text-center">
    <img
      src="https://github.com/rajput2107/rajput2107/blob/master/Assets/Developer.gif"
      alt="Developer animation"
      style="max-width: 220px; border-radius: 12px;"
    />
  </div>
</div>

---

<!-- GitHub stats section -->
<div class="d-flex flex-column flex-lg-row align-items-center justify-content-between mb-4">

  <div class="mb-3 mb-lg-0">
    <img
      src="https://github-readme-stats-sigma-five.vercel.app/api?username=majidmanzoor170&show_icons=true&locale=en"
      alt="Majid's GitHub stats"
      style="max-width: 100%;"
    />
  </div>

  <div>
    <img
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=majidmanzoor170&show_icons=true&locale=en&layout=compact"
      alt="Top languages"
      style="max-width: 100%;"
    />
  </div>

</div>

---

### ☕ Get in touch

- Gmail: <a href="mailto:majidmanzoor170@gmail.com">majidmanzoor170@gmail.com</a>  
- ResearchGate: <a href="https://www.researchgate.net/profile/Majid-Manzoor-2">Majid Manzoor</a>  
- LinkedIn: <a href="https://www.linkedin.com/in/manzoormajid/">manzoormajid</a>  

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

{% if site.data.repositories.github_users %}

## 👤 GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}
### Trophies for {{ user }}
{% endif %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
</div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## 📂 GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
