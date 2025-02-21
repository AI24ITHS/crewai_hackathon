from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task, before_kickoff, after_kickoff
from .tools.custom_tool import PerplexitySearchTool

# Uncomment the following line to use an example of a custom tool
# from plugghjalpen.tools.custom_tool import MyCustomTool

# Check our tools documentations for more information on how to use them
# from crewai_tools import SerperDevTool

@CrewBase
class Plugghjalpen():
	"""Plugghjalpen crew"""

	agents_config = 'config/agents.yaml'
	tasks_config = 'config/tasks.yaml'

	@before_kickoff # Optional hook to be executed before the crew starts
	def pull_data_example(self, inputs):
		# Example of pulling data from an external API, dynamically changing the inputs
		inputs['extra_data'] = "This is extra data"
		return inputs

	@after_kickoff # Optional hook to be executed after the crew has finished
	def log_results(self, output):
		# Example of logging results, dynamically changing the output
		print(f"Results: {output}")
		return output

	@agent
	def researcher(self) -> Agent:
		return Agent(
			config=self.agents_config['researcher'],
			verbose=True
		)

	@agent
	def teaching_professor(self) -> Agent:
		return Agent(
			config=self.agents_config['teaching_professor'],
			verbose=True
		)

	@agent
	def link_retriever(self) -> Agent:
		"""Create a search agent with Perplexity search capabilities."""
		search_tool = PerplexitySearchTool()
		return Agent(
			config=self.agents_config['link_retriever'],
			tools=[search_tool],
			max_execution_time=800,
			verbose=True
		)
	

	@task
	def research_task(self) -> Task:
		return Task(
			config=self.tasks_config['research_task'],
		)

	@task
	def reporting_task(self) -> Task:
		return Task(
			config=self.tasks_config['reporting_task'],
			output_file='results/report.md'
		)

	@task
	def link_retrieving_task(self) -> Task:
		return Task(
			config=self.tasks_config['link_retrieving_task'],
			output_file='results/report_links.md'
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the Plugghjalpen crew"""
		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=True,
			# process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
		)
