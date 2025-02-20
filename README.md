# CrewAI Project Guide

## Overview
CrewAI is a framework for orchestrating role-playing AI agents. This guide provides resources and installation instructions for both macOS and Windows systems.

## Learning Resources

### Official Documentation
- [CrewAI Documentation](https://docs.crewai.com/)
- [CrewAI Tools Guide](https://docs.crewai.com/tools/)
- [CrewAI Agents Guide](https://docs.crewai.com/agents/)

### Learning Courses
- [deeplearning.ai - Multi-AI Agent Systems with CrewAI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/)
- [deeplearning.ai - Practical Multi-AI Agents and Advanced Use Cases with CrewAI](https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/)

## Prerequisites

- Python 3.10-3.12
- OpenAI/Anthropic API key

## Installation Guide

### macOS Installation

1. **Check Python Version**
   ```bash
   python3 --version
   ```
   If needed, install Python using Homebrew:
   ```bash
   brew install python@3.12
   ```

2. **Project Setup**
   ```bash
   # Create and enter project directory
   mkdir my_crewai_project
   cd my_crewai_project

   # Create and activate virtual environment
   python3.12 -m venv venv
   source venv/bin/activate
   ```

3. **Install CrewAI**
   ```bash
   pip install 'crewai[tools]'
   ```

4. **Create Project**
   ```bash
   crewai create crew <project_name>
   ```

5. **Create Project**
   ```bash
   cd <project_name>
   ```

6. **Run Project**
   ```bash
   crewai run
   ```

### Windows Installation

1. **Check Python Version**
   ```bash
   python --version
   ```
   If needed, download Python 3.12 from [python.org](https://www.python.org/downloads/)
   > ⚠️ Important: Check "Add Python to PATH" during installation

2. **Install Microsoft Buildtools**

   Microsoft Buildtools is required for certain packages in CrewAI to run.
   Follow this [guide](https://github.com/bycloudai/InstallVSBuildToolsWindows?tab=readme-ov-file) to install.

3. **Project Setup**
   ```bash
   # Create and enter project directory
   mkdir my_crewai_project
   cd my_crewai_project

   # Create and activate virtual environment
   python -m venv venv
   venv\Scripts\activate
   ```

4. **Install CrewAI**
   ```bash
   pip install crewai[tools]
   ```

4. **Create Project**
   ```bash
   crewai create crew <project_name>
   ```
   
6. **Run Project**
   ```bash
   cd <project_name>
   ```

7. **Run Project**
   ```bash
   crewai run
   ```

### READY TO ROCK!

Try setting up your first crew with Crewai's quickstart [guide](https://docs.crewai.com/quickstart)

HIGHLY recommended to do the two Deeplearning.ai courses mentioned earlier in this guide!
Now have some fun!

## Tips for Success
1. Always use a virtual environment to avoid package conflicts
2. Keep your API keys secure and never commit them to version control
3. Check the [official documentation](https://docs.crewai.com/installation) for troubleshooting and updates





