import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechnologySection from './components/TechnologySection.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Legal from './components/Legal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [stack, setStack] = useState([])

  // Load the technology data asynchronously from the JSON file.
  useEffect(() => {
    let isActive = true

    const loadTechnologies = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Dynamic import keeps the data in its own file (never a hardcoded
        // array inside a component) and resolves asynchronously.
        const module = await import('./data/technologies.json')
        // A short pause so the loading state is actually visible on screen.
        await new Promise((resolve) => setTimeout(resolve, 350))
        if (isActive) setTechnologies(module.default)
      } catch (loadError) {
        console.error('Failed to load technologies:', loadError)
        if (isActive) setError('The technology data could not be loaded. Please try again.')
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    loadTechnologies()

    return () => {
      isActive = false
    }
  }, [reloadKey])

  // IDs already in the stack, used to disable the matching cards.
  const stackIds = useMemo(() => stack.map((item) => item.id), [stack])

  const handleAddToStack = (technology) => {
    if (stackIds.includes(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  const handleRemoveFromStack = (technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty.')
      return
    }
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <TechnologySection
          technologies={technologies}
          isLoading={isLoading}
          error={error}
          onRetry={() => setReloadKey((key) => key + 1)}
          stack={stack}
          stackIds={stackIds}
          onAdd={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
        <Projects />
        <About />
        <Contact />
        <Legal />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        limit={3}
        toastClassName="text-sm font-semibold"
      />
    </div>
  )
}
